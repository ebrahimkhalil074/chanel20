"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { SearchIcon } from "@/src/components/icons";
import Logo from "@/src/assets/footer-logo-4d56d219.png";
import Image from "next/image";
import { useCustomSession } from "../context/sessonContext";
import NavbarDropdown from "./NavbarDropdown";

export const Navbar = () => {
  const pathname = usePathname();
  const { session, status } = useCustomSession();

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      {/* Left Logo & Nav Links */}
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image width={50} height={50} alt="logo" src={Logo.src} />
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <NavbarItem key={item.href}>
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "px-4 py-2 rounded-md text-white transition",
                    isActive
                      ? "bg-green-500"
                      : "bg-red-500 hover:bg-red-600"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              </NavbarItem>
            );
          })}
        </ul>
      </NavbarContent>

      {/* Desktop Search + Theme + Auth */}
      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
          {session?.user?.email ? (
            <NavbarDropdown />
          ) : (
            <Link href="/login">Login</Link>
          )}
        </NavbarItem>
      </NavbarContent>

      {/* Mobile menu toggle */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {searchInput}

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {/* Navigation links */}
          {siteConfig.navMenuItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  href={item.href}
                  className={clsx(
                    "px-4 py-2 rounded-md text-white block",
                    isActive
                      ? "bg-green-500"
                      : "bg-red-500 hover:bg-red-600"
                  )}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            );
          })}

          {/* Divider */}
          <hr className="my-2 border-default-300" />

          {/* Mobile auth controls */}
          {session?.user?.email ? (
            <>
              <NavbarMenuItem>
                <Link
                  href="/dashboard"
                  className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded text-white block"
                >
                  Dashbord
                </Link>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <Link
                  href="/logout"
                  className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white block"
                >
                  LogOut
                </Link>
              </NavbarMenuItem>
            </>
          ) : (
            <NavbarMenuItem>
              <Link
                href="/login"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white block"
              >
                Login
              </Link>
            </NavbarMenuItem>
          )}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
