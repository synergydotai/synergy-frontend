import type { Metadata } from "next";
import "./globals.css";
import { beVietnamPro, robotoMono } from "@/assets/fonts";
import WebsiteLayout from "@/components/views/layout/website";
import { LayoutFC } from "@/utils/types";
import { ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Synergy",
  description: "Bridging AI and the Real World"
};

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html className={`${robotoMono.variable} ${beVietnamPro.variable}`}>
      <body>
        <WebsiteLayout>{children}</WebsiteLayout>
        <ToastContainer position="bottom-left" />
      </body>
    </html>
  );
};

export default RootLayout;
