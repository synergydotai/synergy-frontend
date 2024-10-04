import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import Link from "next/link";
import React, { HTMLProps } from "react";

type Props = HTMLProps<HTMLLIElement> & {
  href: string;
  classNames?: { li?: string; a?: string };
};

const NavItem: FC<Props> = ({
  href,
  children,
  className,
  classNames,
  ...props
}) => {
  return (
    <li className={cls(classNames?.li)} {...props}>
      <Link
        href={href}
        className={cls(
          "text-gray font-mono font-medium relative pb-1 transition-all duration-300",
          "after:absolute after:content-[''] after:bottom-0 after:left-0 after:border-b-2 after:border-primary after:w-0 after:transition-all after:duration-300",
          "hover:text-primary hover:after:w-[35px]",
          className,
          classNames?.a
        )}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
