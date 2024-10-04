import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import React, { HTMLProps, ReactNode } from "react";
import SvgSpinner from "./Spinner";

type Props = Omit<HTMLProps<HTMLButtonElement>, "type" | "size"> & {
  color?: "primary" | "gray" | "white" | "black";
  type?: "button" | "submit" | "reset";
  startContent?: ReactNode;
  endContent?: ReactNode;
  loading?: boolean;
};

const buttonTypes = {
  primary:
    "bg-primary text-white hover:bg-primary-hover disabled:bg-gray-lighter disabled:text-gray-light",
  gray: "bg-gray-darker text-white hover:bg-gray-hover disabled:bg-gray-lighter disabled:text-gray-light",
  white: "bg-white text-gray-darker hover:bg-gray-bg",
  black: "bg-gray-darker text-white hover:bg-gray-hover",
};

const Button: FC<Props> = ({
  children,
  color = "primary",
  startContent,
  endContent,
  className,
  loading,
  disabled,
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
      disabled={disabled || loading}
      {...props}
    >
      {loading ? <SvgSpinner className="h-full" /> : startContent}
      {children}
      {endContent}
    </button>
  );
};

export default Button;
