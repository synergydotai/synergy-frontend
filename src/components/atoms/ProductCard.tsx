import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import React from "react";
import Icon from "./Icon";

type Props = {
  isActive?: boolean;
};

const ProductCard: FC<Props> = ({ children, isActive }) => {
  return (
    <div
      className={cls(
        "w-full relative rounded-x20",
        isActive ? "bg-gray-darker" : "bg-gray-lighter "
      )}
    >
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
