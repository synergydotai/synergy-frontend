import { ColorVariants, FC } from "@/utils/types";
import { useFormStatus } from "react-dom";
import Button, { ButtonProps } from "./Button";
import React, { HTMLProps, ReactNode } from "react";

type Props = Omit<HTMLProps<HTMLButtonElement>, "type" | "size"> &
  ButtonProps & {
    icon?: ReactNode;
    color?: ColorVariants;
    size?: "lg" | "md" | "sm";
    padding?: string;
  };

const SubmitButton: FC<Props> = ({ children, startContent, ...props }) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" {...props} loading={pending}>
      {children}
    </Button>
  );
};

export default SubmitButton;
