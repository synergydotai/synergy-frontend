import React from "react";
import Hero from "./Hero";
import Metrics from "./Metrics";
import About from "./About";
import { FC, MetricResponseType } from "@/utils/types";
import Mission from "./Mission";
import Benefits from "./Benefits";
import Instructions from "./Instructions";

type Props = {
  metrics: MetricResponseType;
};

const Home: FC<Props> = ({ metrics }) => {
  return (
    <main>
      <Hero />
      <About />
      <Mission />
      <Benefits />
      <Instructions />
      <Metrics metrics={metrics} />
    </main>
  );
};

export default Home;
