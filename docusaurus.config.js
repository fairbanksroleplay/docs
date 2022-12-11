// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Fairbanks Roleplay",
  tagline: "",
  url: "https://fbrp.xyz",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fairbanksroleplay", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Fairbanks Roleplay",
        logo: {
          alt: "Fairbanks Roleplay",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "info",
            position: "left",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://fbrp.xyz/discord",
            label: "Discord",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Information",
                to: "/docs/info",
              },
              {
                label: "Server Rules",
                to: "/docs/server-handbook/rules",
              },
              {
                label: "Server Guide",
                to: "/docs/server-handbook/guide",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://fbrp.xyz/discord",
              },
              {
                label: "Game Link",
                href: "https://join.fbrp.xyz",
              },
              {
                label: "Roblox Group",
                href: "https://fbrp.xyz/group",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Official Blog",
                to: "/blog",
              },
              {
                label: "Terms of Service",
                to: "/docs/terms",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Fairbanks Roleplay, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
