import { MOCK_API_ENDPOINT } from "@/utils/constants";

export const getMetrics = async () => {
  try {
    const response = await fetch(`${MOCK_API_ENDPOINT}/1`);
    const data = await response.json();
    return { data };
  } catch (err) {
    return {
      error: err instanceof Error ? err.message : "Unable to get metric data",
      data: {}
    };
  }
};
