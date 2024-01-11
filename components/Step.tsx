import Image from "next/image";
import { default as ovalIcon } from "@/assets/icons/icon-oval.svg";

interface IProps {
  line?: boolean;
}

const Step = ({ line }: IProps) => {
  return (
    <div className="relative px-6">
      <Image src={ovalIcon.src} alt="oval icon" width={30} height={30} />
      {line ? (
        <span className="absolute -z-10 w-full h-[2px] top-step-line bg-pale-orange"></span>
      ) : undefined}
    </div>
  );
};

export default Step;
