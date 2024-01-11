import { LinkButton } from "@/components/Button";
import CollectionSection from "@/components/CollectionSection";
import Hero from "@/components/Hero";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

const HomePage = () => {
  return (
    <main className="grid max-w-[1280px] mx-auto">
      <Hero actionLink={<LinkButton href="/">Create your plan</LinkButton>} />
      <CollectionSection />
      <WhyChooseUsSection />
    </main>
  );
};

export default HomePage;
