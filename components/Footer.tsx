import siteMetadata from "siteMetadata";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-gray-700 pt-10 text-center text-slate-800 dark:text-gray-100">
      <p>{siteMetadata.footerText} © 2022</p>
    </footer>
  );
}
