"use client";

import React, { useState, useEffect } from "react";
import Logo from "../atoms/Logo";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import NavItem from "../atoms/NavItem";
import Navdropdown from "../molecules/Navdropdown";
import { HOME_SECTIONS } from "@/utils/constants";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    console.log("[Navbar] Componente montado");
  }, []);

  // Funciones
  const toggleNav = () => {
    console.log("[Navbar] Toggle navigation. Estado previo:", navOpen);
    setNavOpen((curr) => !curr);
  };
  const closeNav = () => {
    console.log("[Navbar] Cerrando navegación");
    setNavOpen(false);
  };

  return (
    <header className="p-4 sm:p-8 sticky top-0 z-[5] w-full">
      <div className="container mx-auto bg-white rounded-x20 p-4 border border-gray-bg flex justify-between items-center relative z-10">
        <div className="max-w-28 sm:max-w-[200px] ml-1 sm:ml-6">
          <Logo />
        </div>
        {/* Navegación centrada para pantallas grandes */}
        <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex items-center gap-10">
            <NavItem href={`/#${HOME_SECTIONS.HERO}`}>Home</NavItem>
            <NavItem href={`/#${HOME_SECTIONS.BENEFITS}`}>Our Products</NavItem>
          </ul>
        </nav>
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

