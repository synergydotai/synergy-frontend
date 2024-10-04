import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { ROUTES, TAO } from "@/utils/constants";
import { FC, FormState } from "@/utils/types";
import Link from "next/link";
import React from "react";

type Props = {
  state: FormState<{ amount: number; action: "delegation" | "undelegation" }>;
};

const SuccessNotification: FC<Props> = ({ state }) => {
  return (
    <section className="text-center flex justify-center items-center h-full">
      <div className="flex flex-col justify-center items-center gap-20 max-w-[540px]">
        <header className="flex flex-col items-center w-11/12 gap-6">
          <Icon
            name="icon-check-verified"
            className="!text-5xl text-success-light"
          />
          <h2 className="text-4xl font-medium font-sans">
            The {state?.data?.action} process was successful!
          </h2>
          <span className="text-sm font-mono text-gray w-11/12">
            Your staking balance has been{" "}
            {state?.data?.action == "delegation" ? "replenished" : "deducted"}{" "}
            by{" "}
            <span className="text-gray-dark font-bold">
              {state?.data?.amount}
              {TAO}
            </span>
            . You can view your balance on the dashboard page
          </span>
        </header>
        <footer className="grid gap-2.5 w-full">
          <Button
            endContent={<Icon name="icon-chevron-right" />}
            className="rounded-x10 p-4 w-full"
          >
            {state?.data.action === "delegation" ? "Delegate" : "Undelegate"}{" "}
            more
          </Button>
          <Link href={ROUTES.HOME}>
            <Button color="gray" className="rounded-x10 p-4 w-full">
              Back to Home
            </Button>
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default SuccessNotification;
