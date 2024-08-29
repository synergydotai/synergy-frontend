import HomeBenefitCard from "@/components/atoms/HomeBenefitCard";
import HomeSectionHeader from "@/components/atoms/HomeSectionHeader";
import React from "react";
import customSupport from "@/assets/images/custom-support.svg";
import flexibleSolutions from "@/assets/images/flexible-solution.svg";
import robustSecurity from "@/assets/images/robust-security.svg";
import stableInfrastructure from "@/assets/images/stable-infrastructure.svg";
import { HOME_SECTIONS } from "@/utils/constants";

const Benefits = () => {
  return (
    <section
      className="bg-white px-4 sm:px-8 relative z-[3]"
      id={HOME_SECTIONS.BENEFITS}
    >
      <div className="container mx-auto py-7 md:p-14 h-full">
        <HomeSectionHeader>our benefits</HomeSectionHeader>
        <div className="hidden lg:grid grid-cols-3 mt-40 gap-8 justify-center  pb-72 relative">
          <div className="flex flex-col items-center gap-80 w-full">
            <HomeBenefitCard
              label="Custom Support"
              description="You receive personalized support tailored to your unique needs, with prompt assistance and solutions designed specifically for your requests."
              src={customSupport}
            />
            <HomeBenefitCard
              label="Robust Security"
              description="Rely on continuous monitoring and system optimization from our experienced team, ensuring 24/7 protection."
              src={robustSecurity}
            />
          </div>
          <div className="flex flex-col gap-80 w-full text-center text-4xl xl:text-6xl">
            <h3 className="sticky top-1/2">What advantages do we have?</h3>
          </div>
          <div className="flex flex-col items-center gap-80 w-full">
            <HomeBenefitCard
              className="relative top-60"
              label="Flexible Solutions"
              description="Choose from various access tiers to manage your validators and subnets according to your specific needs and staking volumes."
              src={flexibleSolutions}
            />
            <HomeBenefitCard
              className="relative top-60"
              description="Experience efficient, fast, and accurate data processing across all your subnets with our high-performance hardware."
              label="Stable Infrastructure"
              src={stableInfrastructure}
            />
          </div>
        </div>
        <div className="lg:hidden mt-20">
          <h3 className="text-4xl mb-8 sticky top-1/2 max-w-64 -z-[1]">
            What advantages do we have?
          </h3>
          <div className="flex flex-col items-end gap-10">
            <HomeBenefitCard
              label="Custom Support"
              description="You receive personalized support tailored to your unique needs, with prompt assistance and solutions designed specifically for your requests."
              src={customSupport}
            />
            <HomeBenefitCard
              label="Flexible Solutions"
              description="Choose from various access tiers to manage your validators and subnets according to your specific needs and staking volumes."
              src={flexibleSolutions}
            />
            <HomeBenefitCard
              label="Robust Security"
              description="Rely on continuous monitoring and system optimization from our experienced team, ensuring 24/7 protection."
              src={robustSecurity}
            />
            <HomeBenefitCard
              description="Experience efficient, fast, and accurate data processing across all your subnets with our high-performance hardware."
              label="Stable Infrastructure"
              src={stableInfrastructure}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
