import Image from "next/image";
import React from "react";
import logo from "@/assets/logos/black.svg";
import bgLeft from "@/assets/images/about-bg-left.svg";
import bgRight from "@/assets/images/about-bg-right.svg";
import { FC } from "@/utils/types";
import { HOME_SECTIONS } from "@/utils/constants";

const About: FC = () => {
  return (
    <section
      className="px-4 sm:px-8 my-8 sticky top-[70px] -z-[0]"
      id={HOME_SECTIONS.ABOUT}
    >
      <div className="container mx-auto min-h-[500px] lg:h-[900px] bg-white rounded-x20 flex items-center justify-center flex-col relative">
        <div className="w-10 my-7 lg:my-12">
          <Image height={40} width={72} alt="black-logo" src={logo} />
        </div>
        <article className="max-w-[900px] text-center px-10 text-2xl lg:text-5xl">
          <span className="text-primary">Synergy.ai</span>{" "}
          <span className="text-gray-dark">is your opportunity</span>{" "}
          <span className="text-darker opacity-20">
            to immerse yourself in the world of decentralized innovation. We
            offer products taht combine AI and real-world capabilities, bringing
            the cost down and the efficiency up.
          </span>
        </article>
        <Image
          src={bgLeft}
          width={500}
          height={300}
          alt="left-bg"
          className="lg:absolute lg:bottom-0 lg:left-0"
        />
        <Image
          src={bgRight}
          width={500}
          height={300}
          alt="right-bg"
          className="hidden lg:block absolute bottom-0 right-0"
        />
      </div>
    </section>
  );
};

export default About;
