import type { Metadata } from "next";
import "./globals.css";
import { beVietnamPro, robotoMono } from "@/assets/fonts";
import WebsiteLayout from "@/components/views/layout/website";
import { LayoutFC } from "@/utils/types";

export const metadata: Metadata = {
  title: "Synergy",
  description: "Bridging AI and the Real World"
};

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html className={`${robotoMono.variable} ${beVietnamPro.variable}`}>
      <body>
        <WebsiteLayout>{children}</WebsiteLayout>
      </body>
    </html>
  );
};

export default RootLayout;
