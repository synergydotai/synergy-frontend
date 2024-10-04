import type { Metadata } from "next";
import "./globals.css";
import { beVietnamPro, robotoMono } from "@/assets/fonts";
import WebsiteLayout from "@/components/views/layout/website";
import { LayoutFC } from "@/utils/types";
import { Slide, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
  title: "Synergy",
  description: "Bridging AI and the Real World",
};

const RootLayout: LayoutFC = ({ children }) => {
  return (
    <html className={`${robotoMono.variable} ${beVietnamPro.variable}`}>
      <body>
        <WebsiteLayout>{children}</WebsiteLayout>
        <ToastContainer
          position="bottom-left"
          autoClose={3000}
          icon={false}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnHover
          theme="colored"
          transition={Slide}
          closeButton={false}
          limit={1}
        />
      </body>
    </html>
  );
};

export default RootLayout;
