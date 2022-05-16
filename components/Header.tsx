import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import siteMetadata from "siteMetadata";

const Header = ({
  theme,
  toggleTheme,
}: {
  theme: string;
  toggleTheme: MouseEventHandler;
}) => {
  const { pathname } = useRouter();
  const activeClass = "text-blue-500 border-b-2 border-blue-500";
  return (
    <header className="flex justify-between">
      <nav>
        <ul className="flex space-x-8">
          {siteMetadata.navigationLinks.map(([title, url], i) => {
            return (
              <li key={i}>
                <Link href={url}>
                  <a className={pathname === url ? activeClass : ""}>{title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <button onClick={toggleTheme}>
        {theme === "light" && <MoonIcon className="text-slate-800 w-8 h-8" />}
        {theme === "dark" && <SunIcon className="text-gray-100 w-8 h-8" />}
      </button>
    </header>
  );
};

export default Header;
