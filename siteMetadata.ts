const siteMetadata = {
  title: "Contentlayer + Next.js Blog",
  description: "Hi, I'm Naimul Haque. Aspiring to become a polymath.",
  footerText: "All rights reserved.",
  defaultTheme: "light",
  siteAddess: "https://exampleblog.com",
  postsPerPage: 3,
  author: "Naimul Haque",
  navigationLinks: [
    ["Home", "/"],
    ["Tags", "/tags"],
    ["Twitter", "https://twitter.com/@naimulcsx"],
  ],
  themes: {
    light: {
      headingColor: "#1e293b",
      textColor: "#64748b",
      backgroundColor: "#fff",
    },
    dark: {
      headingColor: "#f3f4f6",
      textColor: "#9ca3af",
      backgroundColor: "#111827",
    },
  },
};

export default siteMetadata;
