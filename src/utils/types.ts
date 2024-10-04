import { HTMLProps, PropsWithChildren, ReactElement } from "react";

export type ColorVariants = "primary" | "gray";

export type TWClassNames = HTMLProps<HTMLElement>["className"];
export type FC<PropsType = {}> = {
  (
    props: { className?: TWClassNames } & PropsWithChildren<PropsType>, // These line automatically add `className` and `children` to all component using the `FC` type
    context?: unknown
  ): ReactElement | null;
  displayName?: string;
};
export type LayoutFC<
  ParamsType = { [paramsKey: string]: string | string[] | undefined }
> = {
  (props: PropsWithChildren<{ params?: ParamsType }>, context?: unknown):
    | ReactElement
    | null
    | Promise<ReactElement | null>;
  displayName?: string;
};

export type PageFC<
  ParamsType = { [paramsKey: string]: string | string[] | undefined },
  SearchParamsType = {
    [searchParamsKey: string]: string | string[] | undefined;
  }
> = {
  (
    props: {
      params?: ParamsType;
      searchParams?: SearchParamsType;
    },
    context?: unknown
  ): ReactElement | null | Promise<ReactElement | null>;
  displayName?: string;
};
export type FormState<SuccessPayload = any, ErrorPayload = any> =
  | undefined
  | { success: true; data?: SuccessPayload }
  | {
      success: false;
      message: string;
      data?: ErrorPayload;
    };

export type WalletInfo = {
  address: string;
  source: string;
};

export type MetricsType = {
  id: string;
  totalStake: number;
  totalStakeUsd: number;
  dailyReward: number;
  dailyRewardUsd: number;
  dailyValidatorReward: number;
  dailyValidatorRewardUsd: number;
};
export type MetricResponseType = {
  data: MetricsType;
  error: string;
};
