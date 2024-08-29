import Home from "@/components/views/home";
import { getMetrics } from "@/services";
import { MetricsType, PageFC } from "@/utils/types";
import { toast } from "react-toastify";

const HomePage: PageFC = async () => {
  const { data, error } = await getMetrics();

  if (error) {
    toast.error(error.message);
  }
  return <Home metrics={data as MetricsType} />;
};

export default HomePage;
