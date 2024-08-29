import { getMetrics } from "@/services";
import { useErrorToast } from "./toastHook";

export const useMetrics = async () => {
  const { data, error } = await getMetrics();
  useErrorToast(error);
  return data;
};
