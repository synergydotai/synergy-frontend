import { ParticlesPro } from "@/components/atoms/Particles";
import { FC } from "@/utils/types";
import React from "react";
import ContactUsForm from "./ContactUsForm";

const ContactUs: FC = () => {
  return (
    <section className="h-full font-mono px-4 sm:px-8">
      <div className="container mx-auto flex flex-wrap-reverse gap-4 h-full">
        <div className="overflow-hidden flex-1 rounded-x20 min-w-80 min-h-20">
          <ParticlesPro />
        </div>
        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUs;
