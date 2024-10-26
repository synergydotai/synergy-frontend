import { usePopup } from "@/hooks/popupHooks";
import { cls } from "@/utils/helper";
import { FC, TWClassNames } from "@/utils/types";
import React from "react";

type Slots = "root" | "backdrop" | "main";
type Props = {
  isOpen: boolean;
  close?: () => void;
  classNames?: { [slot in Slots]?: TWClassNames };
};

const CLOSE_CLASS = "-top-[100vh]";
const OPEN_CLASS = "top-0";

const Modal: FC<Props> = ({ children, isOpen, close, classNames }) => {
  const { ref } = usePopup(isOpen, {
    classNames: { opened: OPEN_CLASS, closed: CLOSE_CLASS },
  });

  return (
    <div
      ref={ref}
      data-open={isOpen}
      className={cls(
        "fixed top-0 left-0 w-full h-full z-[5] flex justify-center items-center group",
        classNames?.root
      )}
    >
      <div
        className={cls(
          "absolute top-0 left-0 z-10 w-full h-full bg-gray-darker bg-opacity-20 hidden group-data-[open=true]:block",
          classNames?.backdrop
        )}
        onClick={close}
      />
      <main
        className={cls(
          "bg-white relative z-10 transition-all duration-500",
          "group-data-[open=true]:opacity-100 group-data-[open=true]:top-0",
          "group-data-[open=false]:opacity-0 group-data-[open=false]:top-10",
          classNames?.main
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Modal;
