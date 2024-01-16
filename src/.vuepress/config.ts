import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/falser/",

  lang: "zh-CN",
  title: "飞哥与小佛",
  description: "飞哥与小佛的博客",

  theme,
  markdown: {
    headers: {
      level: [1, 2, 3, 4],
    }
  },
  // Enable it with pwa
  // shouldPrefetch: false,
});
