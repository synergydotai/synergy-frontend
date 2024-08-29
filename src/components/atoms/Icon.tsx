import { ColorVariants, FC } from "@/utils/types";
import { cls } from "@/utils/helper";
import { IconNames } from "@/utils/iconNames";

type Props = {
  name: IconNames;
  size?: number | string;
  color?: ColorVariants;
};

const textColorsProps = {
  primary: "text-primary",
  gray: "text-gray-light",
  white: "text-white"
};

const Icon: FC<Props> = ({ className, name, size, color }) => {
  return (
    <i
      style={{
        fontSize: size
          ? typeof size === "number"
            ? `${size}px`
            : size
          : undefined
      }}
      className={cls(
        "text-xl text-inherit",
        name,
        color ? textColorsProps[color] : "",
        className
      )}
    />
  );
};

export default Icon;
