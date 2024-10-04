"use client";
import { ParticlesPro } from "@/components/atoms/Particles";
import { FC } from "@/utils/types";
import React from "react";
import DelegateForm from "./DelegateForm";

const Delegate: FC = () => {
  return (
    <section className="flex flex-wrap-reverse gap-4 h-full font-mono px-4 sm:px-8">
      <div className="overflow-hidden flex-1 rounded-x20">
        <ParticlesPro />
      </div>
      <DelegateForm />
    </section>
  );
};

export default Delegate;
