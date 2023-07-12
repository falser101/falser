import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "falser101's blog",
  description: "falser101's blog",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "falser101",
    authorAvatar: "/head.png",
    lastUpdatedText: "",
    // 自动将分类和标签添加至头部导航条
    autoAddCategoryToNavbar: {
      location: 1, // 默认 0
      categoryText: '分类', // 默认 categories
      tagText: '标签' // 默认 tags
    },
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "文章",
        children: [],
      },
    ],
    commentConfig: {
      type: 'giscus',
      options: {
        repo: 'falser101/blog',
        repoId: 'R_kgDOJ6KYZg',
        category: 'Announcements',
        categoryId: 'DIC_kwDOJ6KYZs4CXzs8',
        lang: 'zh-CN'
      },
    },
  }),
  // debug: true,
});
