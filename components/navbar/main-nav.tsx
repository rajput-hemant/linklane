import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { NavItem } from "@/types/nav";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MainNavProps {
  items?: NavItem[];
}

const MainNav = ({ items }: MainNavProps) => {
  const router = useRouter();
  const { status } = useSession();

  return (
    <div className="flex gap-6 ">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      {status == "authenticated" && items?.length ? (
        <nav className="hidden md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center rounded-md py-2 px-3 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white sm:text-base",
                    item.disabled && "cursor-not-allowed opacity-80 ",
                    router.pathname === item.href &&
                      "bg-slate-200 font-bold text-blue-500 hover:text-blue-600 dark:bg-slate-800 dark:text-sky-500 dark:brightness-110 dark:hover:text-sky-400"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="-ml-4 text-base hover:bg-transparent focus:ring-0 md:hidden"
          >
            <Icons.logo className="mr-2 h-6 w-6" />
            <span className="text-lg font-bold">Menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          sideOffset={24}
          className="w-24 overflow-y-auto overflow-x-clip sm:w-72"
        >
          <DropdownMenuLabel>
            <Link href="/" className="flex items-center">
              <Icons.logo className="mr-2 h-4 w-4" /> {siteConfig.name}
            </Link>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {items?.map(
            (item, index) =>
              item.href && (
                <DropdownMenuItem key={index} asChild>
                  <Link href={item.href}>{item.title}</Link>
                </DropdownMenuItem>
              )
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default MainNav;
