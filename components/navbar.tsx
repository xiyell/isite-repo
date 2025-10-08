import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";

export const Navbar = () => {
  

  return (
    <HeroUINavbar maxWidth="xl" position="sticky" className=" bg-primary shadow-lg shadow-black/40 rounded-b-2xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">

          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="text-4xl  text-inherit">ISITE</p>
          </NextLink>
        </NavbarBrand>

      </NavbarContent>
      <NavbarContent className="hidden sm:flex " justify="center"></NavbarContent>
              <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary text-[1.5rem] ",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
  

      <NavbarContent className=" basis-1 pl-4" justify="end">
          <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

     <NavbarMenu className="w-[50%] sm:w-[30%] ml-auto right-0 h-100 fixed">
  <div className="mx-4 mt-2 flex flex-col gap-2">
    {siteConfig.navMenuItems.map((item, index) => (
      <NavbarMenuItem key={`${item}-${index}`}>
        <Link
          color={
            index === 2
              ? "primary"
              : index === siteConfig.navMenuItems.length - 1
              ? "danger"
              : "foreground"
          }
          href={item.href}
          size="lg"
          className="text-lg sm:text-xl hover:text-primary transition-all duration-200"

        >
          {item.label}
        </Link>
      </NavbarMenuItem>
    ))}
  </div>
</NavbarMenu>

    </HeroUINavbar>
  );
};
