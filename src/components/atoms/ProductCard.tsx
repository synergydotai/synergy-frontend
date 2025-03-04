import { cls } from "@/utils/helper";
import { FC } from "@/utils/types";
import React, { ReactNode } from "react";
import Icon from "./Icon";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";

// Definimos las propiedades que recibe ProductCard
type Props = {
  isActive?: boolean;
  src?: StaticImport;
  link?: string;
  icon?: ReactNode;
  backgroundImage?: StaticImport;
  backgroundOpacity?: string;
};

const ProductCard: FC<Props> = ({ children, isActive, src, link, icon, backgroundImage, backgroundOpacity = "1" }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log("[ProductCard] Hover iniciado:", children);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log("[ProductCard] Hover finalizado:", children);
  };

  // Determinar si la tarjeta es la de la lupa
  const isSearchCard = link === "https://explore-synergies.replit.app/";

  return (
    <Link
      href={link || ""}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cls(
        "w-full relative rounded-x20 transition-colors duration-300 flex items-center justify-center",
        isActive ? "bg-gray-darker" : "bg-gray-lighter",
        isSearchCard && isHovered && "!bg-primary-hover"
      )}
      style={isSearchCard && backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: backgroundOpacity
      } : {}}
    >
      {(src || icon) && (
        <div className="absolute top-4 left-4">
          <div
            className={cls(
              `rounded-lg w-14 h-14 sm:rounded-[15px] sm:w-[100px] sm:h-[100px] flex justify-center items-center transition-all duration-300`,
              isSearchCard && isHovered ? 'bg-[#E05A00]' : 'bg-[#c0c0c0]'
            )}
          >
            {src ? (
              <Image
                src={src}
                width={50}
                height={50}
                alt="icon"
                className={cls(
                  "sm:w-16 sm:h-16 w-8 h-8 opacity-100",
                  isSearchCard && isHovered ? "filter brightness-0 invert" : ""
                )}
              />
            ) : (
              icon ?? null
            )}
          </div>
        </div>
      )}
      <div className={cls("pb-[60%] md:pb-[90%]" )} />
      <div
        className={cls(
          "absolute bottom-4 flex justify-center items-center w-full font-mono text-gray-700 font-semibold text-center"
        )}
      >
        <span className="md:text-xl max-w-full px-4">
          {isSearchCard ? "Explore our How-To's" : children || "Soon..."}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
