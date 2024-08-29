import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import React, { HTMLProps, ReactNode } from "react";

type Props = Omit<HTMLProps<HTMLButtonElement>, "type" | "size"> & {
  color?: "primary" | "gray" | "white";
  type?: "button" | "submit" | "reset";
  startContent?: ReactNode;
  endContent?: ReactNode;
};

const buttonTypes = {
  primary:
    "bg-primary text-white hover:bg-primary-hover disabled:bg-gray-lighter disabled:text-gray-light",
  gray: "bg-gray-darker text-white hover:bg-gray-hover disabled:bg-gray-lighter disabled:text-gray-light",
  white: "bg-white text-gray-darker hover:bg-gray-bg"
};

const Button: FC<Props> = ({
  children,
  color = "primary",
  startContent,
  endContent,
  className,
  ...props
}) => {
  return (
    <button
      className={cls(
        "flex items-center justify-center gap-2 rounded-sm transition-colors duration-200 font-mono",
        "disabled:cursor-not-allowed disabled:bg-gray-lighter disabled:text-gray-light",
        buttonTypes[color],
        className
      )}
      {...props}
    >
      {startContent}
      {children}
      {endContent}
    </button>
  );
};

export default Button;
