import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Incalr26的小站",
  description: "Incalr26的小站",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
