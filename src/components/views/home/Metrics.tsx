"use client";
import Button from "@/components/atoms/Button";
import HomeMetricCard from "@/components/atoms/HomeMetricCard";
import Icon from "@/components/atoms/Icon";
import { HOME_SECTIONS } from "@/utils/constants";
import { FC, MetricResponseType } from "@/utils/types";
import React from "react";
import { toast } from "react-toastify";

type Props = {
  metrics: MetricResponseType;
};

const Metrics: FC<Props> = ({ metrics }) => {
  const { data, error } = metrics;
  if (error) {
    toast.error(error);
  }
  return (
    <section
      className="px-4 sm:px-8 py-8 bg-gray-bg relative z-[3]"
      id={HOME_SECTIONS.METRICS}
    >
      <div className="container mx-auto flex flex-col gap-8 ">
        <div className="grid sm:grid-cols-2 gap-4">
          <Button
            className="p-5 rounded-x20"
            startContent={<Icon name="icon-code-02" />}
            endContent={<Icon name="icon-chevron-right" />}
            color="black"
          >
            btcli stake...
          </Button>
          <Button
            className="p-5 rounded-x20 gap-4"
            endContent={<Icon name="icon-chevron-right" />}
          >
            Delegate
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-8">
          <HomeMetricCard
            label="Total Stake:"
            value={data.totalStake}
            usdValue={data.totalStakeUsd}
          />
          <HomeMetricCard
            label="Daily Reward"
            value={data.dailyReward}
            usdValue={data.dailyRewardUsd}
          />
          <HomeMetricCard
            label="Daily Validator Reward"
            value={data.dailyValidatorReward}
            usdValue={data.dailyValidatorRewardUsd}
            classNames={{ label: "!max-w-[190px]" }}
          />
        </div>
      </div>
    </section>
  );
};
export default Metrics;
