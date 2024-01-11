import { default as grandEspresso } from "@/assets/images/desktop/image-gran-espresso.png";
import { default as planalto } from "@/assets/images/desktop/image-planalto.png";
import { default as piccollo } from "@/assets/images/desktop/image-piccollo.png";
import { default as danche } from "@/assets/images/desktop/image-danche.png";
import { CollectionCard } from "./Cards";

const cards: ICardWIthImageProps[] = [
  {
    title: "Grand Espresso",
    text: "Light and flavorful blend with cocoa and black pepper for an intense experience",
    imageSrc: grandEspresso.src,
  },
  {
    title: "Planalto",
    text: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
    imageSrc: planalto.src,
  },
  {
    title: "Piccollo",
    text: "Mild and smooth blend featuring notes of toasted almond and dried cherry",
    imageSrc: piccollo.src,
  },
  {
    title: "Danche",
    text: "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
    imageSrc: danche.src,
  },
];

const CollectionSection = () => {
  return (
    <section className="relative mx-6 my-[100px] md:my-[150px]">
      <h2 className="absolute text-[2.875rem] -top-[1.25rem] md:text-[5.625rem] md:-top-[2.5rem] lg:text-[8.75rem] lg:-top-[5.625rem]  w-full text-center -z-10 inline-block font-fraunces bg-gradient-to-b from-grey to-light-cream text-transparent bg-clip-text opacity-40 text-hero">
        our collection
      </h2>
      <div className="grid gap-12 mt-16 max-w-[574px] mx-auto md:mt-10 lg:grid-cols-4 lg:max-w-[1110px] lg:gap-8">
        {cards.map((card, index: number) => (
          <CollectionCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CollectionSection;
