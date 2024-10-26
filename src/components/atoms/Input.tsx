"use client";
import React, { createElement, HTMLProps, ReactNode, useMemo } from "react";
import { FC } from "@/utils/types";
import { cls } from "@/utils/helper";

type Slots =
  | "root"
  | "inputContainer"
  | "startComponent"
  | "endComponent"
  | "input"
  | "label"
  | "helperText";

export type InputProps = HTMLProps<HTMLInputElement> & {
  name: string;
  label?: string;
  hasError?: boolean;
  helperText?: string;
  endComponent?: ReactNode;
  startComponent?: ReactNode;
  multiline?: boolean;
  classNames?: { [slot in Slots]?: string };
  state?: "idle" | "success" | "error" | "warning" | "info" | "noStyle";
};
function getElement(
  element: keyof HTMLElementTagNameMap,
  className: string,
  props: any = {}
) {
  return createElement(element, { ...props, className });
}

const Input: FC<InputProps> = ({
  label,
  endComponent,
  startComponent,
  name,
  hasError,
  helperText,
  className,
  id,
  multiline,
  state = "idle",
  placeholder,
  required,
  classNames,
  ...props
}) => {
  const inputElement = useMemo(
    () =>
      getElement(
        multiline ? "textarea" : "input",
        cls(
          "p-3 px-6 rounded-xl transition-colors duration-200 outline-0 body-md w-full border",
          "data-[idle=true]:[&:placeholder-shown]:bg-gray-bg data-[idle=true]:[&:not(:focus)]:[&:placeholder-shown]:border-gray-bg", // idle state
          "focus:data-[idle=true]:border-primary", // focus/active state
          "disabled:!bg-gray-disabled disabled:!border-gray-disabled", //disabled state
          `[&:not(:focus)]:[&:not(:placeholder-shown)]:[&:not([data-idle])]:[&:not([data-success])]:[&:not([data-error])]:[&:not([data-info])]:[&:not([data-warning])]:border-primary [&:not(:focus)]:[&:not(:placeholder-shown)]:[&:not([data-idle])]:[&:not([data-success])]:[&:not([data-error])]:[&:not([data-info])]:[&:not([data-warning])]:bg-primary-plus`, // filled state
          "data-[success=true]:border-success data-[success=true]:bg-gray-bg", //success
          "data-[error=true]:border-error data-[error=true]:bg-white", //error
          "data-[warning=true]:border-error data-[warning=true]:bg-gray-bg", //warning
          "data-[info=true]:border-primary data-[info=true]:bg-gray-bg", //info
          !!endComponent && "pr-7",
          !!startComponent && "pl-8",
          className,
          classNames?.input
        ),
        {
          ...props,
          id: id || name,
          name,
          [`data-${state}`]: true,
          placeholder: placeholder || " ",
          required,
        }
      ),
    [
      multiline,
      endComponent,
      startComponent,
      className,
      classNames?.input,
      props,
      name,
      id,
      placeholder,
      state,
      required,
    ]
  );
  return (
    <div className={cls("input-group relative", classNames?.root)}>
      <div
        className={cls(
          "input-container my-1 mt-2.5 flex items-center relative font-mono",
          classNames?.inputContainer
        )}
      >
        {startComponent && (
          <span
            className={cls(
              "relative -mr-5 flex h-5 w-5 items-center justify-center pl-4",
              classNames?.startComponent
            )}
          >
            {startComponent}
          </span>
        )}
        {inputElement}
        {label && (
          <label
            htmlFor={id || name}
            className={cls(
              "text-sm text-gray-darker absolute left-6 top-2.5 px-1.5 py-0.5 leading-0 transition-all duration-200 rounded-lg pointer-events-none",
              classNames?.label
            )}
          >
            {label} {required && <span className="text-error">*</span>}
          </label>
        )}
        {endComponent && (
          <span
            className={cls(
              "-ml-7 flex h-5 w-5 items-center",
              classNames?.endComponent
            )}
          >
            {endComponent}
          </span>
        )}
      </div>
      {helperText && (
        <span
          data-state={state}
          className={cls(
            "text-sm",
            "data-[state=error]:text-error",
            classNames?.helperText
          )}
        >
          {helperText}
        </span>
      )}
    </div>
  );
};

export default Input;
