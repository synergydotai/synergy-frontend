"use client";
import { ParticlesPro } from "@/components/atoms/Particles";
import { FC } from "@/utils/types";
import React from "react";
import DelegateForm from "./DelegateForm";

const Delegate: FC = () => {
  return (
    <section className="h-full font-mono px-4 sm:px-8">
      <div className="container mx-auto flex flex-wrap-reverse gap-4 h-full">
        <div className="overflow-hidden flex-1 rounded-x20 min-w-80 min-h-20">
          <ParticlesPro />
        </div>
        <DelegateForm />
      </div>
    </section>
  );
};

export default Delegate;
