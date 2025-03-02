"use client";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { cls } from "@/utils/helper";
import React, { useRef } from "react";
import { useGetInTouchModal } from "@/hooks/popupHooks";
import Input from "@/components/atoms/Input";
import { FC, TWClassNames } from "@/utils/types";

type Slots = "form" | "input" | "button";
type Props = {
  classNames?: { [slot in Slots]?: TWClassNames };
  bgColor: "primary" | "white";
};

const GetInTouchForm: FC<Props> = ({ bgColor, classNames }) => {
  const { open } = useGetInTouchModal();
  const ref = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(ref.current!);
    open(formData.get("email") as string);
    ref.current?.reset();
  };

  return (
    <form
      className={cls("", classNames?.form)}
      ref={ref}
      onSubmit={handleSubmit}
    >
      <Input
        type="email"
        name="email"
        placeholder="E-Mail"
        className={cls("", classNames?.input)}
        required
      />
      <Button
        type="submit"
        color={bgColor === "primary" ? "white" : "primary"}
        endContent={<Icon name="icon-chevron-right" />}
        className={cls("w-full p-3 rounded-x10", classNames?.button)}
      >
        Get in touch
      </Button>
    </form>
  );
};

export default GetInTouchForm;
