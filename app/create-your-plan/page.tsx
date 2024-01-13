import CreatePlanForm from "@/components/CreatePlanForm";
import CreatePlanStepsSection from "@/components/CreatePlanStepsSection";
import Hero from "@/components/Hero";

const CreateYourPlanPage = () => {
  return (
    <main className="grid max-w-[1280px] mx-auto">
      <Hero
        variant="hero-create-plan"
        title="Create a plan"
        text="Build a subscription plan that best fits your needs. We offer an assortment of the best 
  artisan coffees from around the globe delivered fresh to your door."
      />
      <CreatePlanStepsSection />
      <CreatePlanForm />
    </main>
  );
};

export default CreateYourPlanPage;
