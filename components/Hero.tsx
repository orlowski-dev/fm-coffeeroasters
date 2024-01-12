import React from "react";

interface IProps {
  title: string;
  text: string;
  variant: "hero-index" | "hero-about-us" | "hero-create-plan";
  actionLink?: React.ReactElement;
}

const Hero = ({ title, text, variant, actionLink }: IProps) => {
  return (
    <section
      className={
        "mx-6 my-3 text-center md:text-left px-6 py-16 md:px-[58px] md:py-[100px] lg:px-[88px] lg:py-[150px] rounded-2xl hero " +
        variant
      }
    >
      <div className="flex flex-col  gap-7 mx-auto max-w-[300px] md:max-w-[380px] lg:max-w-[480px] md:mx-0">
        <h1 className="text-white text-[2.5rem] leading-[2.5rem]  md:text-h2 lg:text-h1 font-fraunces">
          {title}
        </h1>
        <p className="text-[0.9375rem] text-white font-barlow opacity-80 lg:text-body">
          {text}
        </p>
        {actionLink ? (
          <p className="mt-4 lg:mt-[56px]">{actionLink}</p>
        ) : undefined}
      </div>
    </section>
  );
};

export default Hero;
