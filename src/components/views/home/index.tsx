import React from "react";
import Hero from "./Hero";
import About from "./About";
import { FC } from "@/utils/types";
import Mission from "./Mission";
import Benefits from "./Benefits";
import Instructions from "./Instructions";

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Benefits />
      <Instructions />
    </main>
  );
};

export default Home;
