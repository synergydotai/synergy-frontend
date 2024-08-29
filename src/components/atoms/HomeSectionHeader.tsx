import { FC } from "@/utils/types";
import React from "react";

const HomeSectionHeader: FC = ({ children }) => {
  return (
    <header className="border-t-[1.5px] border-gray-dark w-full font-mono flex items-center gap-4 md:gap-8 pt-5 font-medium">
      <span className="text-primary text-2xl !leading-none">•</span>
      {children}
    </header>
  );
};

export default HomeSectionHeader;
