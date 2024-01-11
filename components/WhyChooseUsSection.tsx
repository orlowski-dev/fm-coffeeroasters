import { default as coffeeBean } from "@/assets/icons/icon-coffee-bean.svg";
import { default as gift } from "@/assets/icons/icon-gift.svg";
import { default as truck } from "@/assets/icons/icon-truck.svg";
import { FeatureCard } from "./Cards";

const features: ICardWIthImageProps[] = [
  {
    title: "Best quality",
    text: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    imageSrc: coffeeBean.src,
  },
  {
    title: "Exclusive benefits",
    text: "Special offers and swag when you subscribe, including 30% off your first shipment.",
    imageSrc: gift.src,
  },
  {
    title: "Free shipping",
    text: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
    imageSrc: truck.src,
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative mx-6">
      <div className="bg-dark-grey-blue md:bg-grey-blue absolute h-[58%] lg:h-[76%] w-full rounded-b-lg rounded-t-2xl -z-10 transition-colors"></div>
      <div className="bg-grey-blue rounded-t-2xl p-6 pt-16 lg:py-[86px] text-white text-center">
        <h2 className="font-fraunces text-h3">Why choose us?</h2>
        <p className="text-body font-barlow opacity-80 mt-6 max-w-[540px] mx-auto">
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>
      <div className="py-12 grid gap-6 lg:grid-cols-3 lg:gap-8 lg:p-6 max-w-[1110px] lg:mx-auto">
        {features.map((feature, index: number) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
