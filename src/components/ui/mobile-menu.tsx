import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X } from "lucide-react";
import { Button } from "./button";
import Link from "next/link";

const navItems = [
  { id: 1, title: "Blog", url: "/blog" },
  { id: 2, title: "Github", url: "https://github.com/brunoacev" },
  {
    id: 3,
    title: "Linkedin",
    url: "https://www.linkedin.com/in/bruno-azevedo-02736bb2/",
  },
  { id: 4, title: "Projetos", url: "/projects" },
];

function MobileMenu() {
  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <X className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Menu className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {navItems.map(({ id, title, url }) => (
            <DropdownMenuItem key={id}>
              <Link href={url} className="text-sm">
                {title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export { MobileMenu };
