// eslint-disable-next-line import/no-anonymous-default-export
const themeConfig = {
  //   Change name of navbar of that one
  logo: "Documents",
  project: {
    link: "https://github.com/QCL-PKNU-GROUP",
  },
  docsRepositoryBase: "https://github.com/your-repo/tree/main/pages",
  footer: false,
  sidebar: {
    defaultMenuCollapsed: false,
    styles: {
      item: "hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400",
      activeItem: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 border-l-4 border-purple-600",
    },
  },
  navbar: {
    links: [
      { name: "Home", href: "/" },
      { name: "Docs", href: "/docs" },
      { name: "About", href: "/about" }, // Added About section
    ],
  },
  themeSwitch: false,
};

export default themeConfig;
