import { LinkButton } from "@/components/Button";
import Hero from "@/components/Hero";

const HomePage = () => {
  return (
    <main className="grid max-w-[1280px] mx-auto">
      <Hero actionLink={<LinkButton href="/">Create your plan</LinkButton>} />
    </main>
  );
};

export default HomePage;
