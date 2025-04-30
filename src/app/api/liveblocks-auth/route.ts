import { Liveblocks } from "@liveblocks/node";
import { ConvexHttpClient } from "convex/browser";
import { auth, currentUser } from "@clerk/nextjs/server";
import { api } from "../../../../convex/_generated/api";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

type OrgClaim = {
  o?: { id: string };
  organization_id?: string;
};

export async function POST(req: Request) {
  const { sessionClaims } = await auth();
  // if (!sessionClaims) return new Response("Unauthorized", { status: 401 });
  if (!sessionClaims) return Response.json({ error: "Unauthorized" }, { status: 401 });


  const user = await currentUser();
  // if (!user) return new Response("Unauthorized", { status: 401 });
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });


  const { room } = await req.json();

  const document = await convex.query(api.documents.getById, { id: room });
  // if (!document) return new Response("Unauthorized", { status: 401 });
  if (!document) return Response.json({ error: "Unauthorized" }, { status: 401 });


  // const orgId = sessionClaims.org_id ?? (sessionClaims as any).o?.id;
  const { o, organization_id } = sessionClaims as OrgClaim;
  const orgId = organization_id ?? o?.id;
  // const orgId: string | undefined = sessionClaims.organization_id ?? sessionClaims.o?.id;
  const isOwner = document.ownerId === user.id;
  const isOrgMember = !!(document.orgId && document.orgId === orgId);

  console.log({isOrgMember, isOwner})
  if (!isOwner && !isOrgMember) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const name = user.fullName ?? "Anonymous";
  const nameToNumber = name
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const hue = Math.abs(nameToNumber) % 360;
  const color = `hsl(${hue}, 80%, 60%)`;

  const session = liveblocks.prepareSession(user.id, {
    userInfo: {
      name,
      avatar: user.imageUrl,
      color,
    },
  });

  session.allow(room, session.FULL_ACCESS);

  const { body, status } = await session.authorize();

  return new Response(body, { status });
}
