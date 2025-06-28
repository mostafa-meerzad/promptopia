import Hero from "./Hero";
import TopRatedPrompts from "./components/TopRatedPrompts";
import ViewMore from "./components/ViewMore";
import searchPrompts from "./services/promptService";
import getTopRatedPrompts from "./services/topRatedPromptService";
type Props = { searchParams: { q: string } };

const HomePage = async ({ searchParams }: Props) => {
  const { q = "" } = await searchParams;
  const prompts = q
    ? await searchPrompts({ q, scope: "PUBLIC_ONLY" })
    : await getTopRatedPrompts();

  return (
    <>
      <Hero />
      <TopRatedPrompts query={q} prompts={prompts} />
      <ViewMore />
    </>
  );
};

export default HomePage;
