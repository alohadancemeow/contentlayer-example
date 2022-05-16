import Header from "./Header";
import Footer from "./Footer";
import { ReactNode, useEffect, useState } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", "light");
    }
    setTheme(localStorage.getItem("theme")!);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      if (prev === "light") {
        localStorage.setItem("theme", "dark");
        return "dark";
      }
      localStorage.setItem("theme", "light");
      return "light";
    });
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="dark:bg-gray-900 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 text-slate-500 dark:text-gray-400 text-lg py-10 space-y-12">
          <Header theme={theme} toggleTheme={toggleTheme} />
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
}
