module.exports = {
  title: "TON Metaspace",
  staticDirectories: ["static"],
  tagline: "TON Metaspace",
  url: "https://tonmetaspace.github.io",
  baseUrl: "/doc/",
  organizationName: "tonmetaspace",
  projectName: "doc",
  favicon: "img/webaverse-white.ico",
  customFields: {},
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          routeBasePath: "website/docs", // Serve the docs at the site's root
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        theme: {
          customCss: [require.resolve("./src/css/customTheme.css")],
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-graphql-plugin",
      {
        // can be a path, a glob or an URL
        schema: "schema.graphql",
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "TON Metaspace",
      logo: {
        src: "img/webaverse-lg.png",
        href: "https://tonmetaspace.github.io/doc",
        target: "_self",
      },
      items: [
        {
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Telegram",
              href: "https://t.me/tonmetaspace",
            },
            {
              label: "Github",
              // A full-page navigation, used for navigating outside of the website.
              href: "https://github.com/tonmetaspace",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Youtube",
              href: "https://www.youtube.com/channel/UC1OkR65VUqZRM9qQPU4nZPQ",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/tonnmetaspace",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TON Metaspace`,
    },
  },
};
