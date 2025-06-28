import Hero from "./Hero";
import TopRatedPrompts from "./components/TopRatedPrompts";
import ViewMore from "./components/ViewMore";
import searchPrompts from "./services/promptService";
import getTopRatedPrompts from "./services/topRatedPromptService";
import getUserInfo from "./services/userService";

const HomePage = async ({ searchParams }: { searchParams: Promise<{ q: string }> }) => {
  const { q = "" } = await searchParams;
  const userInfo = await getUserInfo()
  const prompts = q
    ? await searchPrompts({ q, scope: "PUBLIC_ONLY" })
    : await getTopRatedPrompts(userInfo?.id);

  return (
    <>
      <Hero />
      <TopRatedPrompts query={q} prompts={prompts} />
      <ViewMore />
    </>
  );
};

export default HomePage;
