import HomeSectionHeader from "@/components/atoms/HomeSectionHeader";
import { FC } from "@/utils/types";
import React from "react";

const Instructions: FC = () => {
  return (
    <section className="bg-white px-4 sm:px-8 relative z-[3] min-h-[100vh]">
      <div className="container mx-auto py-7 md:p-14">
        <HomeSectionHeader>delegate instructions</HomeSectionHeader>
        <header>
          <h1 className="font-sans text-3xl md:text-5xl mt-10 mb-5 text-gray-darker">
            Support our vision
          </h1>
          <span className="font-mono text-sm sm:text-xl text-gray max-w-[300px] block">
            By delegating to Synergy you help us grow
          </span>
        </header>
      </div>
    </section>
  );
};

export default Instructions;
