const QualitySection = () => {
  return (
    <section className="relative mt-[78px] mx-6 bg-dark-grey-blue px-6 pb-14 pt-28 text-center rounded-xl quality-bg md:pt-56 md:pb-16 md:mt-[160px] lg:pt-24 lg:pb-44 lg:text-left lg:px-20 lg:mt-20">
      <div className="absolute rounded-lg quality-image"></div>
      <h2 className="font-fraunces text-h4 text-white mb-6 md:text-h3 lg:max-w-[42%]">
        Uncompromising quality
      </h2>
      <p className="font-barlow text-grey opacity-80 max-w-[540px] mx-auto lg:mx-0 lg:max-w-[42%] xl:max-w-[52%]">
        Although we work with growers who pay close attention to all stages of
        harvest and processing, we employ, on our end, a rigorous quality
        control program to avoid over-roasting or baking the coffee dry. Every
        bag of coffee is tagged with a roast date and batch number. Our goal is
        to roast consistent, user-friendly coffee, so that brewing is easy and
        enjoyable.
      </p>
    </section>
  );
};

export default QualitySection;
