import { HIWCard } from "./Cards";
import Stepper from "./Stepper";

const cards: ICardWithNumsProps[] = [
  {
    title: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    num: "01",
  },
  {
    num: "02",
    title: "Choose the frequency",
    text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
  },
  {
    num: "03",
    title: "Receive and enjoy!",
    text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
  },
];

const CreatePlanStepsSection = () => {
  return (
    <section className="px-6 py-14 mt-32 bg-dark-grey-blue rounded-lg">
      <Stepper dark />
      <div className="grid gap-6 mt-20 md:mt-0 md:grid-cols-3 md:gap-0">
        {cards.map((card, index: number) => (
          <HIWCard key={index} {...card} darkVariant />
        ))}
      </div>
    </section>
  );
};

export default CreatePlanStepsSection;
