"use client";
import HomeMetricCard from "@/components/atoms/HomeMetricCard";
import { HOME_SECTIONS } from "@/utils/constants";
import { FC, MetricsType } from "@/utils/types";
import React from "react";

type Props = {
  metrics: MetricsType;
};

const Metrics: FC<Props> = ({ metrics }) => {
  return (
    <section className="px-4 sm:px-8 my-8" id={HOME_SECTIONS.METRICS}>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-8">
        <HomeMetricCard
          label="Total Stake:"
          value={metrics.totalStake}
          usdValue={metrics.totalStakeUsd}
        />
        <HomeMetricCard
          label="Daily Reward"
          value={metrics.dailyReward}
          usdValue={metrics.dailyRewardUsd}
        />
        <HomeMetricCard
          label="Daily Validator Reward"
          value={metrics.dailyValidatorReward}
          usdValue={metrics.dailyValidatorRewardUsd}
          classNames={{ label: "!max-w-[190px]" }}
        />
      </div>
    </section>
  );
};
export default Metrics;
