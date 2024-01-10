import Image from "next/image";

const HomePage = () => {
  return (
    <main className="p-6 text-center flex flex-col gap-4 items-center">
      <Image
        src="/brand/logo.svg"
        alt="logo"
        width={235}
        height={25}
        priority
        className="mb-4"
      />
      <h1 className="font-fraunces text-h2 text-dark-grey-blue">
        Coffeeroasters subscription site
      </h1>
      <p className="font-barlow text-body text-grey">
        Frontent Mentor Challenge.
      </p>
    </main>
  );
};

export default HomePage;
