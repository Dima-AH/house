import localFont from "next/font/local";

export const LocalFonts = localFont({
    src: [
      { path: "../public/fonts/YekanBakh-Light.ttf", weight: "100", style: "normal" },
      { path: "../public/fonts/YekanBakh-Regular.ttf", weight: "200", style: "normal" },
      { path: "../public/fonts/YekanBakh-Bold.ttf", weight: "400", style: "normal" },
      { path: "../public/fonts/YekanBakh-Heavy.ttf", weight: "600", style: "normal" },
      { path: "../public/fonts/YekanBakh-Fat.ttf", weight: "700", style: "normal" },
    ]
  });