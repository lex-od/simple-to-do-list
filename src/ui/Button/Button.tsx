import { FC } from "react";
import clsx from "clsx";

type Props = {
  variant?: "primary" | "secondary";
} & JSX.IntrinsicElements["button"];

const Button: FC<Props> = ({ variant = "primary", ...buttonProps }) => {
  return (
    <button
      className={clsx(
        "py-2 px-4 min-w-28 rounded-md transition-colors duration-200 disabled:text-stone-500 disabled:cursor-auto",
        {
          "bg-indigo-300 enabled:hover:bg-indigo-400": variant === "primary",

          "border border-indigo-300 enabled:hover:border-indigo-500":
            variant === "secondary",
        }
      )}
      {...buttonProps}
    />
  );
};

export default Button;
