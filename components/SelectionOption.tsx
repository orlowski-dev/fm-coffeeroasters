import { ForwardedRef, forwardRef } from "react";

interface IProps {
  title: string;
  text: string;
}

const SelectionOption = forwardRef(function SelectionOption(
  {
    title,
    text,
    ...other
  }: IProps & React.InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <label className="relative grid gap-6 p-6 md:pt-8 md:pb-20 lg:pb-24 lg:px-8 rounded-lg bg-light-cream transition-colors cursor-pointer text-dark-grey-blue hover:bg-pale-orange has-[:checked]:bg-dark-cyan has-[:checked]:text-white">
      <input
        type="radio"
        ref={ref}
        {...other}
        className="absolute -z-10 opacity-0"
      />
      <span className="font-fraunces text-h4">{title}</span>
      <span className="font-barlow text-body">{text}</span>
    </label>
  );
});

export default SelectionOption;
