"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

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
  }));

  return users;
}
