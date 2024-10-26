"use client";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import GetInTouchModalProvider from "@/providers/GetInTouchModalProvider";
import { FC } from "@/utils/types";
import React from "react";

const WebsiteLayout: FC = ({ children }) => {
  return (
    <div className="bg-gray-bg">
      <GetInTouchModalProvider>
        <Navbar />
        {children}
        <Footer />
      </GetInTouchModalProvider>
    </div>
  );
};

export default WebsiteLayout;
