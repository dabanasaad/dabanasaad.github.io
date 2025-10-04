import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  lang: "en-US",
  title: "My Awesome Site", 
  description: "A clean and modern website built with VuePress",

  base: "/",

  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["link", { rel: "preconnect", href: "https://fonts.googleapis.com" }],
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    [
      "link",
      {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        rel: "stylesheet",
      },
    ],
  ],

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      {
        text: "🏠 Home",
        link: "/",
      },
      {
        text: "👋 About",
        link: "/about/",
      },
      {
        text: "⚙️ Services",
        children: [
          {
            text: "💻 Web Development",
            link: "/services/web-development",
          },
          {
            text: "🎨 Design",
            link: "/services/design",
          },
          {
            text: "💡 Consulting",
            link: "/services/consulting",
          },
        ],
      },
      {
        text: "📝 Blog",
        link: "/blog/",
      },
      {
        text: "📞 Contact",
        link: "/contact/",
      },
    ],

    sidebar: {
      "/blog/": [
        {
          text: "📝 Recent Posts",
          children: [
            "/blog/README.md",
            "/blog/getting-started.md",
            "/blog/web-development-tips.md",
          ],
        },
      ],
    },

    editLink: false,
    lastUpdated: true,
    contributors: false,
    colorMode: "auto",
    colorModeSwitch: true,
  }),
});
