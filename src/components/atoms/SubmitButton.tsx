import { ColorVariants, FC } from "@/utils/types";
import Button, { ButtonProps } from "./Button";
import React, { HTMLProps, ReactNode, useState } from "react";

type Props = Omit<HTMLProps<HTMLButtonElement>, "type" | "size"> &
  ButtonProps & {
    icon?: ReactNode;
    color?: ColorVariants;
    size?: "lg" | "md" | "sm";
    padding?: string;
  };

const SubmitButton: FC<Props> = ({ children, startContent, ...props }) => {
  const [pending, setPending] = useState(false);

  return (
    <Button type="submit" {...props} loading={pending}>
      {children}
    </Button>
  );
};

export default SubmitButton;
