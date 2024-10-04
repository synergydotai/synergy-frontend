import { cls } from "@/utils/helper";
import { FC, TWClassNames } from "@/utils/types";
import React, { ReactNode, useEffect, useState } from "react";
import Icon from "../atoms/Icon";

type Slots = "root" | "trigger" | "options" | "option" | "backdrop";
type OptionType = {
  className?: TWClassNames;
  label: ReactNode;
  value?: string;
  action?: () => void;
};
type Props = {
  triggerEl: (state: { selected: string }) => ReactNode;
  options: OptionType[];
  classNames?: { [slot in Slots]?: TWClassNames };
  defaultSelected?: string;
  onChange?: (selected: string) => void;
  value?: string;
};

const SelectAccordion: FC<Props> = ({
  triggerEl,
  options,
  classNames,
  defaultSelected,
  onChange,
  value,
}) => {
  const [selected, setSelected] = useState<string>("");
  const [collapsed, setCollapsed] = useState(true);

  const collapseSelect = () => setCollapsed(true);
  const toggleSelect = () => setCollapsed((curr) => !curr);
  const handleOptionClick = (option: OptionType) => {
    if (option.action) {
      option.action();
    } else if (option.value !== undefined) {
      if (onChange) {
        onChange(option.value);
      } else {
        setSelected(option.value);
      }
    }
    collapseSelect();
  };

  useEffect(() => {
    setSelected(defaultSelected || options[0].value || "");
  }, []);
  useEffect(() => {
    if (onChange && value) {
      setSelected(value);
    }
  }, [value]);
  return (
    <div data-slot="root" className={cls("relative", classNames?.root)}>
      <button
        data-slot="trigger"
        className={cls(
          "flex items-center justify-between py-3 px-6 w-full  border border-gray-lighter rounded-xl font-medium",
          classNames?.trigger
        )}
        onClick={toggleSelect}
      >
        {triggerEl({ selected })}
        <Icon name="icon-chevron-down" />
      </button>
      <div className="relative">
        <div
          data-collapsed={collapsed}
          className={cls(
            "fixed z-[1] top-0 left-0 w-full h-full hidden data-[collapsed=false]:block",
            classNames?.backdrop
          )}
          onClick={collapseSelect}
        />
        <div
          data-slot="options"
          data-collapsed={collapsed}
          className={cls(
            "grid absolute z-[2] bg-white w-full overflow-hidden transition-all duration-500 -top-2.5 border border-gray-lighter border-t-0 pt-2.5 rounded-b-xl",
            classNames?.options
          )}
          style={{ maxHeight: collapsed ? 0 : 52 * options.length }}
        >
          {options.map((option, idx) => {
            return (
              option.value !== selected && (
                <button
                  data-slot="option"
                  onClick={() => handleOptionClick(option)}
                  key={option.value + idx.toString()}
                  className={cls(
                    "flex items-center justify-start gap-5 w-full px-6 py-3 border-t border-gray-lighter font-medium",
                    classNames?.option
                  )}
                >
                  {option.label}
                </button>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectAccordion;
