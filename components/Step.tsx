interface IProps {
  line?: boolean;
  dark?: boolean;
}

const Step = ({ line, dark }: IProps) => {
  return (
    <div className="relative px-6">
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="15.5"
          cy="15.5"
          r="14.5"
          stroke="#0E8784"
          strokeWidth="2"
          className={dark ? "fill-[#333D4B]" : "fill-[#ffffff]"}
        />
      </svg>
      {line ? (
        <span className="absolute -z-10 w-full h-[2px] top-step-line bg-pale-orange"></span>
      ) : undefined}
    </div>
  );
};

export default Step;
