import { default as uk } from "@/assets/illustrations/illustration-uk.svg";
import { default as can } from "@/assets/illustrations/illustration-canada.svg";
import { default as aus } from "@/assets/illustrations/illustration-australia.svg";
import { HeadquarterCard } from "./Cards";

const headquarters: IHeadquartersCardProps[] = [
  {
    country: "United Kingdom",
    contact: ["68 Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"],
    icon: {
      src: uk.src,
      width: 48,
      height: 58,
    },
  },
  {
    country: "Canada",
    contact: [
      "1528 Eglinton Avenue",
      "Toronto",
      "Ontario M4P 1A6",
      "+1 416 485 2997",
    ],
    icon: {
      src: can.src,
      width: 58,
      height: 58,
    },
  },
  {
    country: "Australia",
    contact: ["36 Swanston Street", "Kewell", "Victoria", "+61 9928 3629"],
    icon: {
      src: aus.src,
      width: 58,
      height: 58,
    },
  },
];

const HeadquartersSection = () => {
  return (
    <section className="py-24 max-w-[1045px] mx-auto">
      <h2 className="font-fraunces px-6 text-h4 text-grey text-center md:text-left">
        Our headquarters
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-0 lg:mt-20">
        {headquarters.map((headquarter, index: number) => (
          <HeadquarterCard key={index} {...headquarter} />
        ))}
      </div>
    </section>
  );
};

export default HeadquartersSection;
