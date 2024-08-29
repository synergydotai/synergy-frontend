import { FC } from "@/utils/types";
import Image from "next/image";
import React from "react";
import networkImage from "@/assets/images/hero-network.svg";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { HOME_SECTIONS } from "@/utils/constants";

const Hero: FC = () => {
  return (
    <section className="px-4 sm:px-8" id={HOME_SECTIONS.HERO}>
      <div className="container mx-auto flex flex-col lg:flex-row gap-8">
        <div className="lg:max-w-[570px] flex flex-col gap-8">
          <div className="bg-white px-6 py-10 sm:px-10 sm:py-16 rounded-x20 lg:flex-1">
            <h1 className="text-2xl sm:text-5xl text-dark mb-7 sm:mb-24 font-sans !leading-tight">
              Exploring synergies. Bridging{" "}
              <span className="text-primary">AI</span> and the{" "}
              <span className="text-primary">Real World</span>
            </h1>
            <ul className="text-gray list-disc list-inside font-mono  text-sm sm:text-xl">
              <li className="mt-5">
                Lowering the barrier to leverage bittensor products
              </li>
              <li className="mt-5">
                Aiming for long term sustainability of the ecosystem
              </li>
              <li className="mt-5">Loyal to bittensor ethos</li>
            </ul>
          </div>
          <div className="btns flex flex-col gap-4">
            <Button
              className="p-5 rounded-x20"
              startContent={<Icon name="icon-code-02" />}
              endContent={<Icon name="icon-chevron-right" />}
            >
              btcli stake...
            </Button>
            <Button
              className="p-5 rounded-x20 gap-4"
              color="gray"
              disabled
              endContent={<Icon name="icon-chevron-right" />}
            >
              Delegate
            </Button>
          </div>
        </div>
        <div className="bg-white rounded-x20 h-[170px] lg:h-[unset]">
          <Image
            width={1000}
            height={900}
            src={networkImage}
            priority
            alt="hero image"
            className="opacity-90 mix-blend-difference h-full w-full object-cover rounded-x20"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
