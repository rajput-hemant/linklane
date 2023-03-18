import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import MainNav from "@/components/navbar/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const SiteHeader = () => {
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 backdrop-blur dark:border-b-slate-700">
      <div className="container flex h-16 w-full items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {status == "unauthenticated" && (
              <Link
                href="/login"
                className={
                  "flex items-center rounded-md py-2 px-4 text-sm font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white sm:text-base"
                }
              >
                Login
              </Link>
            )}
            {status == "unauthenticated" && (
              <Link href="/signup">
                <Button
                  className={cn(
                    buttonVariants({ variant: "subtle" }),
                    "rounded-full text-sm sm:text-base"
                  )}
                >
                  Sign Up
                </Button>
              </Link>
            )}
            <div className="hidden sm:flex">
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={buttonVariants({
                    size: "sm",
                    variant: "ghost",
                    className: "dark:text-slate-400 py-5",
                  })}
                >
                  <Icons.gitHub className="h-8 w-8" />
                  <span className="sr-only">GitHub</span>
                </div>
              </Link>
              <ThemeToggle />
            </div>
            {status == "authenticated" && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="relative h-10 w-10 rounded-full"
                  >
                    <Avatar>
                      <AvatarImage
                        src={session.user.image ?? ""}
                        alt={session.user.name ?? "User Profile Picture"}
                      />
                      <AvatarFallback>SC</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel>
                    {session.user.name?.replace(
                      /(^\w{1})|(\s+\w{1})/g,
                      (letter) => letter.toUpperCase()
                    )}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <span>Settings</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent forceMount>
                          <DropdownMenuItem>
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <button onClick={() => signOut()}>Log out</button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
