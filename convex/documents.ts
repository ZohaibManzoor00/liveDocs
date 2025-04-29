import { paginationOptsValidator } from "convex/server";
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const create = mutation({
  args: {
    title: v.optional(v.string()),
    initialContent: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("Unauthorized");

    const orgId = (user.organization_id ?? undefined) as string | undefined;

    const documentId = await ctx.db.insert("documents", {
      title: args.title ?? "Untitled Document",
      ownerId: user.subject,
      orgId,
      initialContent: args.initialContent,
    });
    return documentId;
  },
});

export const get = query({
  args: {
    paginationOpts: paginationOptsValidator,
    search: v.optional(v.string()),
  },
  handler: async (ctx, { search, paginationOpts }) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("Unauthorized");

    const orgId = (user.organization_id ?? undefined) as string | undefined;

    if (search && orgId) {
      return ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("orgId", orgId),
        )
        .paginate(paginationOpts);
    }

    if (search) {
      return ctx.db
        .query("documents")
        .withSearchIndex("search_title", (q) =>
          q.search("title", search).eq("ownerId", user.subject),
        )
        .paginate(paginationOpts);
    }

    if (orgId) {
      return ctx.db
        .query("documents")
        .withIndex("by_org_id", (q) => q.eq("orgId", orgId))
        .paginate(paginationOpts);
    }

    // Personal + No Search
    return await ctx.db
      .query("documents")
      .withIndex("by_owner_id", (q) => q.eq("ownerId", user.subject))
      .paginate(paginationOpts);
  },
});

export const removeById = mutation({
  args: { id: v.id("documents") },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("Unauthorized");
    
    const doc = await ctx.db.get(args.id);
    if (!doc) throw new ConvexError("Document not found");
    
    const orgId = (user.organization_id ?? undefined) as string | undefined
    const isOwner = doc.ownerId === user.subject;
    const isOrgMember = !!(doc.orgId && doc.orgId === orgId)
    if (!isOwner && !isOrgMember) throw new ConvexError("Unauthorized");

    return ctx.db.delete(args.id);
  },
});

export const updateById = mutation({
  args: { id: v.id("documents"), title: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.auth.getUserIdentity();
    if (!user) throw new ConvexError("Unauthorized");

    const doc = await ctx.db.get(args.id);
    if (!doc) throw new ConvexError("Document not found");

    const orgId = (user.organization_id ?? undefined) as string | undefined
    const isOwner = doc.ownerId === user.subject;
    const isOrgMember = !!(doc.orgId && doc.orgId === orgId)
    if (!isOwner && !isOrgMember) throw new ConvexError("Unauthorized");

    return ctx.db.patch(args.id, { title: args.title });
  },
});

export const getById = query({
  args: { id: v.id("documents") },
  handler: async (ctx, { id }) => {
    return ctx.db.get(id);
  },
});
