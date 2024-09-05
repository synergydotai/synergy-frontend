import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import React from "react";

import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  label: string;
  description: string;
  src: StaticImport;
};

const HomeBenefitCard: FC<Props> = ({ className, src, label, description }) => {
  return (
    <div
      className={cls(
        "w-full  min-h-[340px] xl:h-[496px] p-7.5 bg-primary-card-bg rounded-x10 lg:rounded-x20 ",
        className
      )}
    >
      <div className="rounded-md lg:rounded-xl p-3 w-10 h-10 lg:w-14 lg:h-14 bg-primary">
        <Image width={40} height={40} alt="card-icon" src={src} />
      </div>
      <h4 className="mt-4 lg:mt-8 text-2xl lg:text-4xl w-4/5 pb-4 lg:pb-5 font-sans font-medium">
        {label}
      </h4>
      <p className="border-t border-gray-darker font-mono text-base lg:text-xl xl:text-base 2xl:text-xl pt-5 lg:pt-7">
        {description}
      </p>
    </div>
  );
};

export default HomeBenefitCard;
