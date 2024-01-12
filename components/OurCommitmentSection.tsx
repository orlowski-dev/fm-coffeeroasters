import { default as commitmentImgMobile } from "@/assets/images/mobile/image-commitment.jpg";
import { default as commitmentImgTablet } from "@/assets/images/tablet/image-commitment.jpg";
import Image from "next/image";

const OurCommitmentSection = () => {
  return (
    <section className="max-w-[1110px] mx-auto px-6 py-16 grid gap-8 md:grid-cols-commitment-md md:gap-12 md:my-36 md:items-center lg:gap-28 lg:grid-cols-commitment-lg lg:my-40">
      <Image
        src={commitmentImgMobile}
        alt="commitment image"
        width={445}
        height={520}
        className="md:hidden lg:block mx-auto rounded-xl"
      />
      <Image
        src={commitmentImgTablet}
        alt="commitment image"
        width={281}
        height={470}
        className="hidden md:block lg:hidden rounded-xl"
      />
      <div className="text-center md:text-left">
        <h2 className="font-fraunces text-h3 text-dark-grey-blue mb-8 lg:text-h2">
          Our commitment
        </h2>
        <p className="font-barlow text-body text-grey opacity-80">
          {
            "We're built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world's best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of the places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region."
          }
        </p>
      </div>
    </section>
  );
};

export default OurCommitmentSection;
