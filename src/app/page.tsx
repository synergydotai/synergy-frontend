import Home from "@/components/views/home";
import { getMetrics } from "@/services";
import { MetricResponseType, PageFC } from "@/utils/types";

const HomePage: PageFC = async () => {
  const metric = await getMetrics();

  return <Home metrics={metric as MetricResponseType} />;
};

export default HomePage;
