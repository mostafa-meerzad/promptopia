import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { status, data: session } = useSession();
  const router = useRouter();

  return {
    status,
    user: session?.user ?? null,
    login: () => signIn("", { callbackUrl: "/" }),
    logout: () => signOut({ redirect: true, callbackUrl: "/" }),
    createNew: () => router.push("/prompts/new"),
  };
};
