import Image from "next/image";

export const CollectionCard = ({
  title,
  text,
  imageSrc,
}: ICardWIthImageProps) => {
  return (
    <article className="text-center md:text-left lg:text-center grid md:grid-cols-2 items-center justify-center lg:grid-cols-1 gap-10">
      <Image
        src={imageSrc}
        alt={title + " image"}
        width={452}
        height={356}
        className="max-w-80 md:max-w-52 justify-self-center"
      />
      <div className="pb-8">
        <h3 className="font-fraunces text-h4 text-dark-grey-blue">{title}</h3>
        <p className="mt-4 max-w-[300px] md:max-w-full mx-auto text-body font-barlow text-dark-grey-blue">
          {text}
        </p>
      </div>
    </article>
  );
};

export const FeatureCard = ({ title, text, imageSrc }: ICardWIthImageProps) => {
  return (
    <article className="flex flex-col md:flex-row lg:flex-col md:items-center md:gap-14 px-6 md:px-12 pt-16 pb-14 bg-dark-cyan text-center md:text-left lg:text-center text-white mx-6 lg:mx-0 rounded-lg">
      <Image
        src={imageSrc}
        width={72}
        height={72}
        alt="feautre"
        className="mx-auto"
      />
      <div>
        <h3 className="font-fraunces text-h4 mt-14 mb-6 md:m-0 md:mb-4">
          {title}
        </h3>
        <p className="font-barlow text-body opacity-80">{text}</p>
      </div>
    </article>
  );
};

export const HIWCard = ({
  num,
  title,
  text,
  darkVariant,
  noButton,
}: ICardWithNumsProps) => {
  return (
    <article className="grid gap-6 text-center p-6 md:text-left md:gap-9">
      <p className="font-fraunces text-h1 text-pale-orange">{num}</p>
      <h3
        className={`font-fraunces text-[1.75rem] ${
          darkVariant ? "text-white" : "text-dark-grey-blue"
        }`}
      >
        {title}
      </h3>
      {!noButton ? (
        <p
          className={`font-barlow text-body opacity-80 max-w-[400px] mx-auto md:mx-0 ${
            darkVariant ? "text-white" : "text-dark-grey-blue"
          }`}
        >
          {text}
        </p>
      ) : undefined}
    </article>
  );
};

export const HeadquarterCard = ({
  country,
  contact,
  icon,
}: IHeadquartersCardProps) => {
  return (
    <article className="p-6 text-center md:text-left">
      <Image
        src={icon.src}
        alt="icon"
        width={icon.width}
        height={icon.height}
        className="mx-auto md:mx-0"
      />
      <address className="mt-11">
        <h2 className="font-fraunces text-h3 text-dark-grey-blue mb-8 md:text-h4">
          {country}
        </h2>
        {contact.map((elem, index: number) => (
          <p key={index} className="font-barlow text-grey mb-1">
            {elem}
          </p>
        ))}
      </address>
    </article>
  );
};
