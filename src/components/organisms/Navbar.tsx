"use client";

import React, { useState } from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import NavItem from "../atoms/NavItem";
import Navdropdown from "../molecules/Navdropdown";
import { HOME_SECTIONS, ROUTES } from "@/utils/constants";
import Link from "next/link";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  // functions
  const toggleNav = () => setNavOpen((curr) => !curr);
  const closeNav = () => setNavOpen(false);

  return (
    <header className="p-4 sm:p-8 sticky top-0 z-[5] w-full">
      <div className="container mx-auto bg-white rounded-x20 p-4 border border-gray-bg flex justify-between items-center relative z-10">
        <div className="max-w-28 sm:max-w-[200px] ml-1 sm:ml-6">
          <Logo />
        </div>
        <div className="flex-1 lg:flex justify-between items-center hidden">
          <nav className="flex-1">
            <ul className="flex items-center justify-center gap-10">
              <NavItem href={`/#${HOME_SECTIONS.HERO}`}>Home</NavItem>
              <NavItem href={`/#${HOME_SECTIONS.BENEFITS}`}>
                Our Products
              </NavItem>
              <NavItem href="">Consulting</NavItem>
            </ul>
          </nav>
          <Link href={ROUTES.DELEGATE}>
            <Button
              className="py-4 px-7 rounded-x10 gap-4"
              endContent={<Icon name="icon-chevron-right" />}
            >
              Delegate
            </Button>
          </Link>
        </div>
        <Button
          className="w-10 h-10 rounded-lg z-10 block lg:hidden"
          startContent={
            <Icon name="icon-menu-02" className="rotate-180 !text-2xl" />
          }
          onClick={toggleNav}
        />
      </div>
      <Navdropdown close={closeNav} isOpen={navOpen} />
    </header>
  );
};

export default Navbar;
