import HeadquartersSection from "@/components/HeadquartersSection";
import Hero from "@/components/Hero";
import OurCommitmentSection from "@/components/OurCommitmentSection";
import QualitySection from "@/components/QualitySection";

const AboutUsPage = () => {
  return (
    <main className="grid max-w-[1280px] mx-auto">
      <Hero
        variant="hero-about-us"
        title="About Us"
        text="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      />
      <OurCommitmentSection />
      <QualitySection />
      <HeadquartersSection />
    </main>
  );
};

export default AboutUsPage;
