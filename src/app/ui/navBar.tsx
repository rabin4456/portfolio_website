"use client";
import React from "react";
import { HomeIcon, SunIcon, UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { MoonIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";


const menues = [
  {
    name: "",
    href: "/app/home",
    icon: HomeIcon,
  },
  {
    name: "",
    href: "/app/about",
    icon: UserIcon,
  },
];

const NavBar = () => {
  const pathName = usePathname();
  const { theme, setTheme } = useTheme();

  const activeRoute = React.useCallback(
    (href: string) => {
      let activeClassName = "";
      if (pathName.includes(href)) {
        activeClassName = "bg-primary-500 dark:bg-primary-500 text-white ";
      }
      return activeClassName;
    },
    [pathName]
  );



  return (
    <>
  
      <div className=' h-screen w-[7rem] fixed flex flex-col items-center '>
        <div className='pt-5'>
          <button
            className={clsx(
              "bg-neutral-200 opacity-100 h-14 w-14  rounded-full flex items-center justify-center"
            )}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme !== "dark" ? (
              <MoonIcon
                className={clsx("text-gray-600 h-6 w-6  shrink-0 ", {})}
                aria-hidden='true'
              />
            ) : (
              <SunIcon
                className={clsx("text-gray-600 h-6 w-6  shrink-0 ", {})}
                aria-hidden='true'
              />
            )}
          </button>
        </div>
        <div className='pt-28 flex flex-col items-center gap-6'>
          {menues.map((item) => (
            <Link href={item.href} key={item.href}>
              <button
                className={clsx(
                  "bg-neutral-200 dark:bg-dark-400 opacity-100 h-14 w-14 rounded-full flex items-center justify-center",
                  activeRoute(item.href)
                )}
              >
                <item.icon
                  className={clsx(" h-6 w-6  shrink-0 ", {
                    "text-white": pathName.includes(item.href),
                    "text-gray-600 dark:text-white": !pathName.includes(
                      item.href
                    ),
                  })}
                  aria-hidden='true'
                />
              </button>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavBar;
