import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";

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
      {/* <h2 className="text-4xl font-bold">Contentlayer + Next.js Blog</h2>
      <p className="text-xl text-gray-500">
        Written by Naimul Haque. You should follow them on twitter, @naimulcsx.
      </p> */}
      <nav>
        <ul className="flex space-x-8">
          <li>
            <Link href="/">
              <a className={pathname === "/" ? activeClass : ""}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/tags">
              <a className={pathname === "/tags" ? activeClass : ""}>Tags</a>
            </Link>
          </li>
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
