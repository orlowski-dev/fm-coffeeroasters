import { LinkButton } from "@/components/Button";
import CollectionSection from "@/components/CollectionSection";
import HIWSection from "@/components/HIWSection";
import Hero from "@/components/Hero";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

const HomePage = () => {
  return (
    <main className="grid max-w-[1280px] mx-auto">
      <Hero
        variant="hero-index"
        title="Great coffee made simple."
        text="Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule."
        actionLink={<LinkButton href="/">Create your plan</LinkButton>}
      />
      <CollectionSection />
      <WhyChooseUsSection />
      <HIWSection />
    </main>
  );
};

export default HomePage;
