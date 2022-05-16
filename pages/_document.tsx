import { Html, Head, Main, NextScript } from "next/document";
import siteMetadata from "siteMetadata";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/styles/github-dark.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.15.3/katex.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            const theme = localStorage.getItem("theme") || "light";
            const root = document.documentElement;
            const styles = ${JSON.stringify(siteMetadata.themes)}
            root.style.setProperty('--text-color', styles[theme].textColor)
            root.style.setProperty('--heading-color', styles[theme].headingColor)
            root.style.setProperty('--background-color', styles[theme].backgroundColor)
        `,
          }}
        ></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
