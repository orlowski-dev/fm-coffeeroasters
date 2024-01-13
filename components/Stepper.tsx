import Step from "./Step";

interface IProps {
  dark?: boolean;
}

const Stepper = ({ dark }: IProps) => {
  return (
    <div className="relative z-10 hidden md:grid grid-cols-3 mt-10 mb-12 lg:mt-20 lg:mb-16">
      <Step line dark={dark ?? undefined} />
      <Step line dark={dark ?? undefined} />
      <Step dark={dark ?? undefined} />
    </div>
  );
};

export default Stepper;
