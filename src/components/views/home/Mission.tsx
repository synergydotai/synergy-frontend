import HomeSectionHeader from "@/components/atoms/HomeSectionHeader";
import React from "react";
import cyborg from "@/assets/images/cyborg-mission.svg";
import cyborgSm from "@/assets/images/cyborg-mission-sm.svg";
import Image from "next/image";
import { HOME_SECTIONS } from "@/utils/constants";

const Mission = () => {
  return (
    <section
      className="border-t border-gray-bg bg-white relative z-[3] px-4 sm:px-8"
      id={HOME_SECTIONS.MISSION}
    >
      <div className="container mx-auto py-7 md:p-14 h-full relative pb-[420px] sm:!pb-[450px]">
        <HomeSectionHeader>our mission</HomeSectionHeader>
        <div className="max-w-[500px] ml-auto flex flex-col gap-10 md:mr-10 text-gray-darker pt-14 md:pt-20">
          <h1 className="font-sans text-3xl md:text-5xl mb-5">
            We create synergy between AI and the real world
          </h1>
          <span className="font-mono text-xl max-w-[90%]">
            providing you with affordable tools to integrate technological
            innovation into your life
          </span>
          <span className="font-mono text-xl max-w-[90%] self-end text-right">
            developing decentralized solutions that ensure sustainable
            development of the ecosystem and maximum efficiency.
          </span>
        </div>
        <Image
          width={2000}
          height={1384}
          alt="cyborg-hand"
          src={cyborg}
          className="absolute w-full bottom-14 right-0 -z-[1] hidden sm:block"
        />
        <Image
          width={2000}
          height={1384}
          alt="cyborg-hand-sm"
          src={cyborgSm}
          className="absolute w-full bottom-0 right-0 -z-[1] block sm:hidden"
        />
      </div>
    </section>
  );
};

export default Mission;
