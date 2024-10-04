import { FC } from "@/utils/types";
import React from "react";
import { HOME_SECTIONS } from "@/utils/constants";
import { ParticlesPro } from "@/components/atoms/Particles";

const Hero: FC = () => {
  return (
    <section className="px-4 sm:px-8" id={HOME_SECTIONS.HERO}>
      <div className="container mx-auto flex flex-col xl:flex-row gap-8">
        <div className="xl:w-1/2 flex flex-col gap-8">
          <div className="bg-white px-6 py-10 sm:px-10 sm:py-16 rounded-x20 lg:flex-1">
            <h1 className="text-4xl md:text-6xl 2xl:text-[80px] max-w-[500px] md:max-w-[700px] 2xl:max-w-full text-dark mb-7 sm:mb-20 font-sans !leading-tight">
              Exploring synergies. <br /> Bridging{" "}
              <span className="text-primary">AI</span> and the{" "}
              <span className="text-primary">Real World</span>
            </h1>
            <ul className="px-6 sm:pl-10 text-gray list-disc list-outside font-mono lg:max-w-[550px] text-sm sm:text-2xl">
              <li className="mt-5 sm:mt-10">
                Lowering the barrier to leverage bittensor products
              </li>
              <li className="mt-5 sm:nt-10">
                Aiming for long term sustainability of the ecosystem
              </li>
              <li className="mt-5 sm:mt-10">Loyal to bittensor ethos</li>
            </ul>
          </div>
        </div>
        <div className="xl:w-1/2 rounded-x20 h-[400px] xl:h-[unset] xl:min-h-[800px] overflow-hidden">
          <ParticlesPro />
        </div>
      </div>
    </section>
  );
};

export default Hero;
