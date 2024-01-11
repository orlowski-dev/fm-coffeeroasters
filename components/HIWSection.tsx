import { LinkButton } from "./Button";
import { HIWCard } from "./Cards";
import Step from "./Step";

const cards: ICardWithNumsProps[] = [
  {
    title: "Pick your coffee",
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
    num: "01",
  },
  {
    title: "Choose the frequency",
    text: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
    num: "02",
  },
  {
    title: "Receive and enjoy!",
    text: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
    num: "03",
  },
];

const HIWSection = () => {
  return (
    <section className="py-[100px]">
      <h2 className="font-fraunces text-h4 md:text-h3 text-grey text-center md:text-left px-6">
        How it works
      </h2>
      <div className="hidden md:grid grid-cols-3 mt-10 mb-12 lg:mt-20 lg:mb-16">
        <Step line />
        <Step line />
        <Step />
      </div>
      <div className="grid gap-6 mt-20 md:mt-0 md:grid-cols-3 md:gap-0">
        {cards.map((card, index: number) => (
          <HIWCard key={index} {...card} />
        ))}
        <div className="p-6 mt-20 md:mt-11 text-center md:grid">
          <LinkButton href="/">Create your plan</LinkButton>
        </div>
      </div>
    </section>
  );
};

export default HIWSection;
