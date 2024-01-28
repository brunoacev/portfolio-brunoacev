import Link from "next/link";
import { ToggleTheme } from "./toggle-theme";
import { MobileMenu } from "./mobile-menu";

const navItems = [
  { id: 1, title: "Blog", url: "/blog" },
  { id: 2, title: "Github", url: "https://github.com/brunoacev" },
  {
    id: 3,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/bruno-azevedo-02736bb2/",
  },
];

function Navigation() {
  return (
    <nav className="w-full flex gap-2 items-center justify-between px-4 py-2 border-b dark:border-b-zinc-800">
      <div>
        <Link href={"/"} className="tracking-wider text-sm">
          Fullstack Develop
        </Link>
      </div>
      <ul className="hidden sm:flex gap-4 items-center">
        {navItems.map(({ id, title, url }) => (
          <li key={id}>
            <Link
              href={url}
              target="_blank"
              className="text-sm hover:underline"
            >
              {title}
            </Link>
          </li>
        ))}
        <ToggleTheme />
      </ul>
      <MobileMenu />
    </nav>
  );
}

export { Navigation };
