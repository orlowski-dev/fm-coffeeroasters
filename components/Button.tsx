import Link, { LinkProps } from "next/link";
import React, { ForwardedRef, forwardRef } from "react";

interface ILinkButtonProps {
  children: React.ReactElement | string;
}

const styles =
  "inline-block min-w-[200px] bg-dark-cyan text-white font-fraunces text-[1.1875rem] font-bold py-4 px-6  rounded-xl transition-colors hover:bg-light-cyan disabled:bg-graeyish-cyan";

export const Button = forwardRef(function Button(
  { children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <button {...props} ref={ref} className={styles}>
      {children}
    </button>
  );
});

export const LinkButton = ({
  children,
  ...other
}: ILinkButtonProps & LinkProps) => {
  return (
    <Link {...other} className={styles}>
      {children}
    </Link>
  );
};
