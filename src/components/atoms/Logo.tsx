import React from "react";
import logo from "@/assets/logos/primary.svg";
import Image from "next/image";
import { FC } from "@/utils/types";
import { cls } from "@/utils/helper";

type Props = {};

const Logo: FC<Props> = ({ className }) => {
  return (
    <Image
      width={200}
      height={40}
      src={logo}
      alt="brand logo"
      className={cls("w-full", className)}
    />
  );
};

export default Logo;
