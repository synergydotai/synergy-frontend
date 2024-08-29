import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import { HTMLProps } from "react";

type Props = HTMLProps<HTMLDivElement> & {
  label: string;
  value: number;
  usdValue: number;
  classNames?: {
    root?: string;
    label?: string;
    valueContainer?: string;
    value?: string;
    usd?: string;
  };
};
const HomeMetricCard: FC<Props> = ({
  label,
  value,
  usdValue,
  className,
  classNames,
  ...props
}) => {
  return (
    <div
      className={cls(
        "flex justify-between items-center bg-white rounded-x10 sm:rounded-x20 p-10 md:max-w-[600px]",
        className,
        classNames?.root
      )}
      {...props}
    >
      <h4
        className={cls(
          "font-medium text-xl xl:text-2xl font-sans text-primary max-w-[100px]",
          classNames?.label
        )}
      >
        {label}
      </h4>{" "}
      <div
        className={cls(
          "flex-1 grid justify-end justify-items-end font-mono text-base xl:text-xl",
          classNames?.valueContainer
        )}
      >
        <p className={classNames?.value}>{value}</p>
        <p className={cls("text-gray", classNames?.usd)}>≈${usdValue}</p>
      </div>
    </div>
  );
};

// •
export default HomeMetricCard;
