import HomeBenefitCard from "@/components/atoms/HomeBenefitCard";
import HomeSectionHeader from "@/components/atoms/HomeSectionHeader";
import React from "react";
import customSupport from "@/assets/images/custom-support.svg";
import flexibleSolutions from "@/assets/images/flexible-solution.svg";
import robustSecurity from "@/assets/images/robust-security.svg";
import stableInfrastructure from "@/assets/images/stable-infrastructure.svg";
import { HOME_SECTIONS } from "@/utils/constants";
import ProductCard from "@/components/atoms/ProductCard";
import bgDesign from "@/assets/images/products-bg-design.svg";
import Image from "next/image";
import Icon from "@/components/atoms/Icon";
import gameController from "@/assets/icons/game-controller.svg";
import shoppingCart from "@/assets/icons/shopping-cart.svg";
import search from "@/assets/icons/search.svg";
import GetInTouchForm from "./GetInTouchForm";

const Benefits = () => {
  return (
    <section
      className="bg-white px-4 sm:px-8 relative z-[3]"
      id={HOME_SECTIONS.BENEFITS}
    >
      <div className="container mx-auto py-7 md:p-14">
        <HomeSectionHeader>our products</HomeSectionHeader>
        {/* products */}
        <div className="grid lg:grid-cols-2 my-10 gap-7 md:gap-7.5">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-y-7.5 md:gap-x-8 ">
            <ProductCard src={search} />
            <ProductCard src={gameController} />
            <ProductCard src={shoppingCart} />
            <ProductCard
              icon={
                <Icon
                  name="icon-quill"
                  className="text-gray-lighter !text-7xl"
                />
              }
            />
          </div>
          <div className="rounded-x20 bg-primary relative flex items-center justify-center flex-col text-center text-white p-7.5 py-14">
            <Image
              src={bgDesign}
              width={500}
              height={300}
              alt="bg-design"
              className="absolute top-0 right-0 w-4/5"
            />
            <div className="flex items-center justify-center flex-col w-full md:w-4/5 min-w-md mx-auto">
              <h4 className="text-3xl md:text-6xl max-w-[580px]">
                Didn’t find what you were looking for?
              </h4>
              <span className="text-sm md:text-xl pt-5 pb-9 w-11/12 max-w-[400px] font-mono">
                Get in touch with us to help you deliver a more powerful product
                leveraging biττensor subnets
              </span>
            </div>
          </div>
        </div>
        {/* benefits */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4  gap-10 mt-8 md:mt-20">
        </div>
      </div>
    </section>
  );
};

export default Benefits;
