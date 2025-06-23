import { prismaClient } from "@/prisma/lib/prisma";

type Scope =
  | "PUBLIC_ONLY" // not logged in
  | "PUBLIC_AND_MINE" // home / prompts when logged in
  | "MINE_ONLY"; // dashboard

const searchPrompts = async (opts: {
  q: string; // raw search term
  authorId?: string; // empty = guest
  scope: Scope;
  take?: number; // limit
}) => {
  const { q, authorId, scope, take = 30 } = opts;
  const term = (q ?? "").trim().slice(0, 100); // safety guard

  const textFilter =
    term.length > 0
      ? {
          OR: [
            { title: { contains: term, mode: "insensitive" } },
            { content: { contains: term, mode: "insensitive" } },
          ],
        }
      : {};

  /* --- visibility filter --- */
  let scopeFilter = {};
  switch (scope) {
    case "PUBLIC_ONLY":
      scopeFilter = { isPublic: true };
      break;
    case "PUBLIC_AND_MINE":
      scopeFilter = {
        OR: [
          { isPublic: true },
          { authorId: authorId ?? "___" }, // impossible id → removed if guest
        ],
      };
      break;
    case "MINE_ONLY":
      scopeFilter = { authorId }; // dashboard always logged in
      break;
  }

  return prismaClient.prompt.findMany({
    where: { AND: [textFilter, scopeFilter] },
    orderBy: { updatedAt: "desc" },
    take,
  });
}


export default searchPrompts