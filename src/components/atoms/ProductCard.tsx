import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import React from "react";
import Icon from "./Icon";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  isActive?: boolean;
  src?: StaticImport;
};

const ProductCard: FC<Props> = ({ children, isActive, src }) => {
  return (
    <div
      className={cls(
        "w-full relative rounded-x20",
        isActive ? "bg-gray-darker" : "bg-gray-lighter"
      )}
    >
      {src && (
        <div className="absolute top-0 left-0 p-8">
          <div className="bg-[#c0c0c0] rounded-lg w-14 h-14 sm:rounded-[15px] sm:w-[100px] sm:h-[100px] flex justify-center items-center">
            <Image
              src={src}
              width={50}
              height={50}
              alt="icon"
              className="sm:w-16 sm:h-16 w-8 h-8"
            />
          </div>
        </div>
      )}
      <div className={cls("pb-[60%] md:pb-[90%] ")} />
      <div
        className={cls(
          "absolute bottom-0 flex justify-between items-end p-8 w-full font-mono",
          isActive ? "text-white" : "text-gray-light"
        )}
      >
        <span className="md:text-xl max-w-28 text-inherit">
          {children || "Soon..."}
        </span>
        <Icon name="icon-chevron-right" />
      </div>
    </div>
  );
};

export default ProductCard;
