"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import { ConvexHttpClient } from "convex/browser";
import { Id } from "../../../../convex/_generated/dataModel";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

export async function getDocuments(ids: Id<"documents">[]) {
  return convex.query(api.documents.getByIds, { ids })
}

export async function getUsers() {
  const { sessionClaims } = await auth();
  const clerk = await clerkClient();

  const res = await clerk.users.getUserList({
    organizationId: [sessionClaims?.org_id ?? (sessionClaims as any).o?.id],
  });

  const users = res.data.map((user) => ({
    id: user.id,
    name: user.fullName ?? "Anonymous",
    avatar: user.imageUrl,
    color: ""
  }));

  return users;
}
