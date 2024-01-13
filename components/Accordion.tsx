"use client";

import { FaAngleDown } from "react-icons/fa6";
import { motion } from "framer-motion";

interface IProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  name: string;
  title: string;
  disabled?: boolean;
  openState?: boolean;
  onClickCallback: (name: string) => void;
}

const variants = {
  visible: {
    height: "100%",
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  invisible: {
    height: "0px",
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const Accordion = ({
  name,
  title,
  disabled,
  openState,
  children,
  onClickCallback,
  ...other
}: IProps) => {
  return (
    <section {...other} className={disabled ? "opacity-50" : undefined}>
      <h3
        className="select-none font-fraunces text-h4 md:text-h3 lg:text-[2.5rem] text-grey flex items-center justify-between gap-12 cursor-pointer"
        onClick={() => {
          if (!disabled) {
            onClickCallback(name);
          }
        }}
      >
        <span>{title}</span>
        <span
          className={`${
            openState ? "chevronOpen" : undefined
          } transition-transform text-h4`}
        >
          <FaAngleDown className="text-dark-cyan" />
        </span>
      </h3>
      <motion.article
        initial={{ height: "0px", opacity: 0 }}
        variants={variants}
        animate={openState ? "visible" : "invisible"}
        className="overflow-hidden"
      >
        <div className="pt-8 pb-28 md:pt-10 md:pb-24 lg:pt-14 lg:pb-10 grid gap-6 md:gap-3 md:grid-cols-3 lg:gap-6">
          {children}
        </div>
      </motion.article>
    </section>
  );
};

export default Accordion;
