import React from "react";
import Logo from "../atoms/Logo";
import Link from "next/link";
import SocialMediaLink from "../atoms/SocialMediaLink";
import NavItem from "../atoms/NavItem";
import { HOME_SECTIONS } from "@/utils/constants";

const Footer = () => {
  return (
    <footer className="bg-gray-bg px-4 md:px-8 py-8 font-mono relative z-[3]">
      <div className="container mx-auto bg-white rounded-x20 p-7 md:p-14">
        <div className="flex lg:justify-between flex-wrap gap-7 md:gap-10 jusitfy-start">
          <div className="flex flex-col gap-10 w-full lg:w-[unset]">
            <div className="w-[160px] lg:w-fit">
              <Logo />
            </div>
            <div className="hidden lg:flex mt-10 flex-col gap-14">
              <ul className="grid gap-5 text-xl font-medium underline">
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
              <p className="text-gray text-xl">
                © 2024 Synergy.
                <br />
                All rights reserved.
              </p>
            </div>
          </div>
          <div className="md:text-xl font-medium">
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
            </ul>
          </div>
          <div className="md:text-xl font-medium">
            <h5 className="hidden md:block text-gray-darker md:mb-10">
              Social media:
            </h5>
            <div className="grid grid-cols-2 gap-4">
              <SocialMediaLink />
              <SocialMediaLink />
              <SocialMediaLink />
              <SocialMediaLink />
            </div>
          </div>
        </div>
        <div className="flex lg:hidden mt-10 flex-col gap-7">
          <ul className="grid gap-2.5 text-base font-medium underline">
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
          <p className="text-gray text-sm">
            © 2024 Synergy.
            <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
