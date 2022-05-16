import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useEffect, useState } from "react";
import siteMetadata from "siteMetadata";

export default function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState(siteMetadata.defaultTheme || "light");
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", siteMetadata.defaultTheme || "light");
    }
    setTheme(localStorage.getItem("theme")!);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const styles = siteMetadata.themes;
    setTheme((prev) => {
      if (prev === "light") {
        localStorage.setItem("theme", "dark");
        root.style.setProperty("--text-color", styles.dark.textColor);
        root.style.setProperty("--heading-color", styles.dark.headingColor);
        root.style.setProperty(
          "--background-color",
          styles.dark.backgroundColor
        );
        return "dark";
      }
      localStorage.setItem("theme", "light");
      root.style.setProperty("--text-color", styles.light.textColor);
      root.style.setProperty("--heading-color", styles.light.headingColor);
      root.style.setProperty(
        "--background-color",
        styles.light.backgroundColor
      );
      return "light";
    });
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="bg-[color:var(--background-color)] min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-[color:var(--text-color)] text-lg py-10 space-y-12">
          <Header theme={theme} toggleTheme={toggleTheme} />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
