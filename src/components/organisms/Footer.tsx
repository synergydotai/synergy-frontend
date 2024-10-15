import React from "react";
import Logo from "../atoms/Logo";
import Link from "next/link";
import SocialMediaLink from "../atoms/SocialMediaLink";
import NavItem from "../atoms/NavItem";
import {
  DISCORD_URL,
  GITHUB_URL,
  HOME_SECTIONS,
  X_PROFILE_URL,
} from "@/utils/constants";
import { FC } from "@/utils/types";
import { cls } from "@/utils/helper";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

const Footer: FC = () => {
  return (
    <footer className="bg-gray-bg px-4 md:px-8 py-8 font-mono relative z-[3]">
      <div className="container mx-auto bg-white rounded-x20 p-7 md:p-14">
        <div className="flex lg:justify-between flex-wrap gap-7 md:gap-10 jusitfy-start">
          <div className="flex flex-col gap-10 w-full lg:w-[unset]">
            <div className="w-[160px] lg:w-fit">
              <Logo />
            </div>
            <div className="md:text-xl font-medium hidden md:block ">
              <h5 className=" text-gray-darker mb-5 md:mb-10">Menu:</h5>
              <ul className="text-gray">
                <NavItem
                  href={`/#${HOME_SECTIONS.ABOUT}`}
                  classNames={{ li: "mb-4 md:mb-6" }}
                >
                  About us
                </NavItem>
                <NavItem
                  href={`/#${HOME_SECTIONS.MISSION}`}
                  classNames={{ li: "mb-4 md:mb-6" }}
                >
                  Our mission
                </NavItem>
                <NavItem
                  href={`/#${HOME_SECTIONS.BENEFITS}`}
                  classNames={{ li: "mb-4 md:mb-6" }}
                >
                  Benefits
                </NavItem>
                <NavItem href="" classNames={{ li: "mb-4 md:mb-6" }}>
                  Docs
                </NavItem>
              </ul>
            </div>
          </div>
          <div className="w-full max-w-[465px]">
            <h5 className="hidden lg:block text-gray-darker mb-5 md:text-xl font-medium md:mb-10">
              Contact us:
            </h5>
            <form className="w-full md:w-[85%] mt-10 md:mt-0 flex flex-col gap-4">
              <input
                type="email"
                placeholder="E-Mail"
                className={cls(
                  "block w-full bg-transparent py-3 px-4 border border-[#8E8E8E80] rounded-x10",
                  "placeholder:font-sans placeholder:text-gray"
                )}
              />
              <Button
                endContent={<Icon name="icon-chevron-right" />}
                className="w-full p-3 rounded-x10"
              >
                Get in touch
              </Button>
            </form>
          </div>
          <div className="md:text-xl font-medium md:hidden">
            <h5 className="text-gray-darker mb-5 md:mb-10">Menu:</h5>
            <ul className="text-gray">
              <NavItem
                href={`/#${HOME_SECTIONS.ABOUT}`}
                classNames={{ li: "mb-4 md:mb-6" }}
              >
                About us
              </NavItem>
              <NavItem
                href={`/#${HOME_SECTIONS.MISSION}`}
                classNames={{ li: "mb-4 md:mb-6" }}
              >
                Our mission
              </NavItem>
              <NavItem
                href={`/#${HOME_SECTIONS.BENEFITS}`}
                classNames={{ li: "mb-4 md:mb-6" }}
              >
                Benefits
              </NavItem>
              <NavItem href="" classNames={{ li: "mb-4 md:mb-6" }}>
                Docs
              </NavItem>
            </ul>
          </div>
          <div className="md:text-xl font-medium">
            <h5 className="hidden md:block text-gray-darker md:mb-10">
              Social media:
            </h5>
            <div className="grid grid-cols-2 gap-4">
              <SocialMediaLink icon="icon-x" link={X_PROFILE_URL}>
                X
              </SocialMediaLink>
              <SocialMediaLink icon="icon-linkedin">Linkedin</SocialMediaLink>
              <SocialMediaLink icon="icon-github" link={GITHUB_URL}>
                Github
              </SocialMediaLink>
              <SocialMediaLink icon="icon-discord" link={DISCORD_URL}>
                Discord
              </SocialMediaLink>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between mt-20 gap-7">
          <p className="text-gray text-sm">
            © 2024 Synergy.
            <br className="block lg:hidden" />
            All rights reserved.
          </p>
          <ul className="grid gap-2.5 lg:grid-cols-2 lg:gap-20 text-base font-medium underline">
            <ul>
              <Link href="" className=" ">
                Privacy Policy
              </Link>
            </ul>
            <ul>
              <Link href="" className="">
                Terms & Conditions
              </Link>
            </ul>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
