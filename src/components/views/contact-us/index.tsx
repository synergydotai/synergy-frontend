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
        <div className="min-w-full md:min-w-[612px] !max-w-[930px] flex-1 bg-white rounded-x20 p-10 flex flex-col justify-between relative">
          <header className="w-11/12 text-gray-dark mb-6 ">
            <h2 className="text-4xl font-medium mb-5">Contact Us</h2>
            <span className="font-mono text-gray text-sm">
              Get in touch with us to help you deliver a more powerful product
              leveraging biττensor subnets
            </span>
          </header>
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
