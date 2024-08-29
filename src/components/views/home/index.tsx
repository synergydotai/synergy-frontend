import React from "react";
import Hero from "./Hero";
import Metrics from "./Metrics";
import About from "./About";
import { FC, MetricsType } from "@/utils/types";
import Mission from "./Mission";
import Products from "./Products";
import Benefits from "./Benefits";

type Props = {
  metrics: MetricsType;
};

const Home: FC<Props> = ({ metrics }) => {
  return (
    <main>
      <Hero />
      <Metrics metrics={metrics} />
      <About />
      <Mission />
      <Products />
      <Benefits />
    </main>
  );
};

export default Home;
