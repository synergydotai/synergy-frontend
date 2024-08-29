import Link from "next/link";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import linkedinLogo from "@/assets/logos/linkedin.svg";

const SocialMediaLink = () => {
  return (
    <Link href="">
      <Button
        color="gray"
        startContent={
          <div className="w-7 h-7 md:w-12 md:h-12 flex justify-center items-center bg-white rounded md:rounded-x10">
            <Image
              width={28}
              height={28}
              alt="linkedin logo"
              src={linkedinLogo}
              className="w-3 h-3 md:h-7 md:w-7"
            />
          </div>
        }
        className="p-3 md:p-5 gap-2.5 md:gap-5 rounded-x10 md:rounded-x20 md:min-w-[220px] hover:bg-primary"
      >
        Linkedin
      </Button>
    </Link>
  );
};

export default SocialMediaLink;
