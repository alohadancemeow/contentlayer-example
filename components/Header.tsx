import Link from "next/link";

const Header = () => {
  return (
    <header className="max-w-3xl mx-auto px-4 space-y-2 pb-6 mb-10 border-b">
      <h2 className="text-4xl font-bold">Contenylayer + Next.js Blog</h2>
      <p className="text-xl text-gray-500">
        Written by Naimul Haque. You should follow them on twitter, @naimulcsx.
      </p>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/tags">Tags</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
