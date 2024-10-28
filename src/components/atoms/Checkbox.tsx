import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import React, { HTMLProps } from "react";
import Icon from "./Icon";

type Props = HTMLProps<HTMLInputElement> & {
  id?: string;
  name?: string;
};

const Checkbox: FC<Props> = ({
  name,
  id,
  children,
  checked,
  className,
  ...props
}) => {
  return (
    <label htmlFor={id} className="font-mono flex items-start gap-3.5">
      <input
        type="checkbox"
        id={id}
        name={name}
        className={cls("absolute opacity-0 peer", className)}
        {...props}
        // checked={checked}
      />
      <div
        data-checked={checked}
        className="w-5 h-5 border group border-gray peer-checked:border-primary peer-checked:*:opacity-100 flex items-center justify-center rounded-[3px] transition-colors duration-200 mt-1"
      >
        <Icon
          name="icon-checked-square"
          className="text-primary opacity-0 transition-opacity duration-200"
        />
      </div>
      <span>{children}</span>
    </label>
  );
};

export default Checkbox;
