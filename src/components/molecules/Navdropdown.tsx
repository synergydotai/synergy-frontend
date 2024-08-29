"use client";
import React, { useEffect, useRef } from "react";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { cls } from "@/utils/helper";
import NavItem from "../atoms/NavItem";
import { FC } from "@/utils/types";

type Props = {
  isOpen: boolean;
  close: () => void;
};

const Navdropdown: FC<Props> = ({ isOpen, close }) => {
  const ref = useRef<HTMLDivElement>(null);
  let timer: NodeJS.Timeout;

  useEffect(() => {
    clearTimeout(timer);
    if (!isOpen) {
      setTimeout(() => {
        ref.current?.classList.add("-top-full");
        ref.current?.classList.remove("top-0");
      }, 450);
    } else {
      ref.current?.classList.remove("-top-full");
      ref.current?.classList.add("top-0");
    }
  }, [isOpen]);
  return (
    <div ref={ref} className="fixed left-0 w-full h-full z-[4] block lg:hidden">
      <div
        className={cls(
          "absolute top-0 left-0 w-full h-full transition-colors duration-[400ms]",
          isOpen ? "bg-[#00000030]" : "bg-[#00000000]"
        )}
        onClick={close}
      />
      <div
        className={cls(
          "absolute left-0 px-6 w-full min-h-96 h-[50%] transition-all duration-[400ms]",
          isOpen ? "top-32 opacity-100" : "-top-0 opacity-0"
        )}
      >
        <div className="flex flex-col justify-between items-start bg-white w-full h-full rounded-2xl p-7">
          <nav className="w-full">
            <ul className="flex flex-col items-start justify-center gap-7 w-full">
              <NavItem
                href=""
                classNames={{ li: "w-full lg:w-[unset]", a: "w-full block" }}
              >
                Home
              </NavItem>
              <NavItem
                href="#our-products"
                classNames={{ li: "w-full lg:w-[unset]", a: "w-full block" }}
              >
                Our Products
              </NavItem>
              <NavItem
                href=""
                classNames={{ li: "w-full lg:w-[unset]", a: "w-full block" }}
              >
                Consulting
              </NavItem>
            </ul>
          </nav>
          <Button
            className="py-4 px-7 rounded-x10 gap-4 w-full"
            color="gray"
            disabled
            endContent={<Icon name="icon-chevron-right" />}
          >
            Delegate
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navdropdown;
