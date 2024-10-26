import localFont from "next/font/local";

export const robotoMono = localFont<"--font-roboto-mono">({
  src: [
    { path: "./RobotoMono-Bold.ttf", weight: "700" },
    { path: "./RobotoMono-SemiBold.ttf", weight: "600" },
    { path: "./RobotoMono-Medium.ttf", weight: "500" },
    { path: "./RobotoMono-Regular.ttf", weight: "400" },
    { path: "./RobotoMono-Light.ttf", weight: "300" },
    { path: "./RobotoMono-ExtraLight.ttf", weight: "200" },
    { path: "./RobotoMono-Thin.ttf", weight: "100" },
  ],
  variable: "--font-roboto-mono",
  display: "swap",
  adjustFontFallback: false,
});
export const beVietnamPro = localFont<"--font-be-vietnam-pro">({
  src: [
    { path: "./BeVietnamPro-Black.ttf", weight: "900" },
    { path: "./BeVietnamPro-ExtraBold.ttf", weight: "800" },
    { path: "./BeVietnamPro-Bold.ttf", weight: "700" },
    { path: "./BeVietnamPro-SemiBold.ttf", weight: "600" },
    { path: "./BeVietnamPro-Medium.ttf", weight: "500" },
    { path: "./BeVietnamPro-Regular.ttf", weight: "400" },
    { path: "./BeVietnamPro-Light.ttf", weight: "300" },
    { path: "./BeVietnamPro-ExtraLight.ttf", weight: "200" },
    { path: "./BeVietnamPro-Thin.ttf", weight: "100" },
  ],
  variable: "--font-be-vietnam-pro",
  display: "swap",
  adjustFontFallback: false,
});
