import HomeSectionHeader from "@/components/atoms/HomeSectionHeader";
import Icon from "@/components/atoms/Icon";
import { cls } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import bgDesign from "@/assets/images/products-bg-design.svg";
import Button from "@/components/atoms/Button";
import ProductCard from "@/components/atoms/ProductCard";
import { HOME_SECTIONS } from "@/utils/constants";

const Products = () => {
  return (
    <section
      className="bg-white relative z-[3] px-4 sm:px-8"
      id={HOME_SECTIONS.PRODUCTS}
    >
      <div className="container mx-auto py-7 md:p-14 h-full relative">
        <HomeSectionHeader>our products</HomeSectionHeader>
        <div className="grid lg:grid-cols-2 my-10 gap-7 md:gap-14">
          <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
            <ProductCard isActive>Validator As A Service</ProductCard>
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="rounded-x20 bg-primary relative flex items-center justify-center flex-col text-center text-white p-4 py-14">
            <Image
              src={bgDesign}
              width={500}
              height={300}
              alt="bg-design"
              className="absolute top-0 right-0 w-4/5"
            />
            <div className="flex items-center justify-center flex-col w-4/5 min-w-md mx-auto">
              <h4 className="text-3xl md:text-5xl">
                Don’t find what you are looking for?
              </h4>
              <span className="text-sm md:text-xl pt-5 pb-9 w-11/12 font-mono">
                Get in touch with us to help you deliver a more powerful product
                leveraging bittensor subnets
              </span>
              <form className="w-[85%] mx-auto flex flex-col gap-4">
                <input
                  type="email"
                  placeholder="E-Mail"
                  className={cls(
                    "block w-full bg-transparent py-3 px-4 border border-white rounded-x10",
                    "placeholder:font-sans placeholder:text-white"
                  )}
                />
                <Button
                  color="white"
                  endContent={<Icon name="icon-chevron-right" />}
                  className="w-full p-3 rounded-x10"
                >
                  Get in touch
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
