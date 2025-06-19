import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prismaClient } from "@/prisma/lib/prisma";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },

  // callbacks: {
  //   async redirect({ url, baseUrl }) {
  //     // If we ever get routed to /prompts/new _by accident_, kill it.
  //     if (url.includes("/prompts/new")) return baseUrl; // = "/"
  //     // Otherwise keep NextAuth’s safe defaults
  //     if (url.startsWith("/")) return `${baseUrl}${url}`;
  //     if (new URL(url).origin === baseUrl) return url;
  //     return baseUrl;
  //   },
  // },
};

export default authOptions;
