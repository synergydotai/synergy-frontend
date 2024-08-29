import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import { FC } from "@/utils/types";
import React from "react";

const WebsiteLayout: FC = ({ children }) => {
  return (
    <div className="bg-gray-bg">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
