import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FC } from "@/utils/types";
import { IconNames } from "@/utils/iconNames";
import Icon from "./Icon";

type Props = {
  icon: IconNames;
  link?: string;
};

const SocialMediaLink: FC<Props> = ({ icon, children, link }) => {
  return (
    <Link
      href={link || ""}
      target={link ? "_blank" : undefined}
      rel="noreferrer"
    >
      <Button
        color="gray"
        startContent={
          <div className="w-7 h-7 md:w-12 md:h-12 flex justify-center items-center bg-white rounded md:rounded-x10">
            <Icon name={icon} color="primary" className="text-sm md:text-2xl" />
          </div>
        }
        className="p-3 md:p-5 gap-2.5 md:gap-5 rounded-x10 !justify-start md:rounded-x20 md:min-w-[220px] hover:bg-primary"
      >
        {children}
      </Button>
    </Link>
  );
};

export default SocialMediaLink;
