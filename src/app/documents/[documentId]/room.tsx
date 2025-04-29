"use client";

import { ReactNode } from "react";
import { useParams } from "next/navigation";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
  const params = useParams();
  return (
    <LiveblocksProvider publicApiKey="pk_dev_EiRhL_QIapz5n5CO1EPOcetPj3N-Yt4ngCWph0tvTzVXZiaacCR6kB7OMw0dq85x">
      <RoomProvider id={params.documentId as string}>
        <ClientSideSuspense fallback={<div>Loading…</div>}>
          {children}
        </ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
