import { Roboto_Mono, Be_Vietnam_Pro } from "next/font/google";

export const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});
export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});
