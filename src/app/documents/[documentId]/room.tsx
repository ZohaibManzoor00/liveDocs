"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { toast } from "sonner";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { getUsers, getDocuments } from "./actions";
import FullScreenLoader from "@/components/shared/full-screen-loader";
import { Id } from "../../../../convex/_generated/dataModel";
import { LEFT_RIGHT_MARGIN_DEFAULT } from "@/constants/editor";

type User = { id: string; name: string; avatar: string };

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = useMemo(
    () => async () => {
      try {
        const userList = await getUsers();
        setUsers(userList);
      } catch {
        toast.error("Failed to fetch users");
      }
    },
    [],
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <LiveblocksProvider
      throttle={16}
      authEndpoint={async () => {
        const endpoint = "/api/liveblocks-auth";
        const room = params.documentId as string;
        const res = await fetch(endpoint, {
          method: "POST",
          body: JSON.stringify({ room }),
        });
        return await res.json();
      }}
      resolveUsers={({ userIds }) => {
        return userIds.map(
          (userId) => users.find((user) => user.id === userId) ?? undefined,
        );
      }}
      resolveMentionSuggestions={({ text }) => {
        let filteredUsers = users;
        if (text) {
          filteredUsers = users.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase()),
          );
        }
        return filteredUsers.map((user) => user.id);
      }}
      resolveRoomsInfo={async ({ roomIds }) => {
        const documents = await getDocuments(roomIds as Id<"documents">[]);
        return documents.map((doc) => ({
          id: doc.id,
          name: doc.name,
        }));
      }}
    >
      <RoomProvider id={params.documentId as string} initialStorage={{ leftMargin: LEFT_RIGHT_MARGIN_DEFAULT, rightMargin: LEFT_RIGHT_MARGIN_DEFAULT }}>
        <ClientSideSuspense
          fallback={<FullScreenLoader label="Room loading" />}
        >
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
