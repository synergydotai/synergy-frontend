"use client"
import { GetInTouchModalContext } from "@/providers/GetInTouchModalProvider";
import { TWClassNames } from "@/utils/types";
import { useContext, useEffect, useRef } from "react";

type PopupHookProps = {
  classNames?: { opened?: TWClassNames; closed?: TWClassNames };
};
const DEFAULT_CLOSED_CLASS = "-top-[100vh]";
const DEFAULT_OPENED_CLASS = "top-0";

export const usePopup = (isOpen: boolean, { classNames }: PopupHookProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const timer = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearTimeout(timer.current);
    const classlist = ref.current?.classList;
    if (!isOpen) {
      // case: closed
      timer.current = setTimeout(() => {
        classlist?.add(classNames?.closed || DEFAULT_CLOSED_CLASS);
        classlist?.remove(classNames?.opened || DEFAULT_OPENED_CLASS);
      }, 500);
    } else {
      // case: open
      classlist?.add(classNames?.opened || DEFAULT_OPENED_CLASS);
      classlist?.remove(classNames?.closed || DEFAULT_CLOSED_CLASS);
    }
  }, [isOpen]);

  return {
    isOpen,
    ref,
    popupContainerRef: ref,
  };
};

export const useGetInTouchModal = () => {
  const modal = useContext(GetInTouchModalContext);
  if (!modal)
    console.log(
      "useGetInTouchModal should be used inside the GetInTouchModalContextProvider"
    );
  return modal;
};
