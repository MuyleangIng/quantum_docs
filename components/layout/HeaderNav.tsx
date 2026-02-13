"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "../ModeToggle";

export default function HeaderNav() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resources = [
    {
      title: "Documentation",
      href: "/",
      description: "Learn how to use Cloudinator effectively",
    },
    {
      title: "Learning Resources",
      href: "/resource/spring-microservice/introduction",
      description: "Detailed API documentation and examples",
    },
    {
      title: "Tutorials",
      href: "/tutorial",
      description: "Step-by-step guides for common tasks",
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-[#0d1117] shadow-sm">
      <div className="container flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-3">
          <Image
            src="/images/qummit-logo-ByV-wv75.png"
            alt="Cloudinator Logo"
            width={40}
            height={40}
            className="rounded"
          />
          <span className="text-xl font-semibold text-gray-900 dark:text-white">
            Qummit Docs
          </span>
        </div>

        {/* Desktop Navigation */}
        {/*<div className="hidden md:flex flex-1 items-center justify-center">*/}
        {/*  <NavigationMenu>*/}
        {/*    <NavigationMenuList className="space-x-1">*/}
        {/*      <NavigationMenuItem>*/}
        {/*        <NavigationMenuTrigger className="bg-transparent text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 font-medium text-sm">*/}
        {/*          Products*/}
        {/*        </NavigationMenuTrigger>*/}
        {/*        <NavigationMenuContent>*/}
        {/*          <ul className="grid w-[320px] gap-1 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800">*/}
        {/*            <li>*/}
        {/*              <NavigationMenuLink asChild>*/}
        {/*                <a*/}
        {/*                  className="flex flex-col rounded-md p-4 no-underline outline-none transition-colors hover:bg-purple-50 dark:hover:bg-purple-950/30 group"*/}
        {/*                  href="#"*/}
        {/*                >*/}
        {/*                  <div className="mb-1 text-sm font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400">*/}
        {/*                    Cloudinator Platform*/}
        {/*                  </div>*/}
        {/*                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">*/}
        {/*                    IaC Advanced platform for developers to deploy*/}
        {/*                    services.*/}
        {/*                  </p>*/}
        {/*                </a>*/}
        {/*              </NavigationMenuLink>*/}
        {/*            </li>*/}
        {/*          </ul>*/}
        {/*        </NavigationMenuContent>*/}
        {/*      </NavigationMenuItem>*/}
        {/*      <NavigationMenuItem>*/}
        {/*        <NavigationMenuTrigger className="bg-transparent text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 font-medium text-sm">*/}
        {/*          Resources*/}
        {/*        </NavigationMenuTrigger>*/}
        {/*        <NavigationMenuContent>*/}
        {/*          <ul className="grid w-[320px] gap-1 p-2 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-800">*/}
        {/*            {resources.map((resource) => (*/}
        {/*              <li key={resource.title}>*/}
        {/*                <NavigationMenuLink asChild>*/}
        {/*                  <a*/}
        {/*                    className="block rounded-md p-4 no-underline outline-none transition-colors hover:bg-purple-50 dark:hover:bg-purple-950/30 group"*/}
        {/*                    href={resource.href}*/}
        {/*                  >*/}
        {/*                    <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 mb-1">*/}
        {/*                      {resource.title}*/}
        {/*                    </div>*/}
        {/*                    <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">*/}
        {/*                      {resource.description}*/}
        {/*                    </p>*/}
        {/*                  </a>*/}
        {/*                </NavigationMenuLink>*/}
        {/*              </li>*/}
        {/*            ))}*/}
        {/*          </ul>*/}
        {/*        </NavigationMenuContent>*/}
        {/*      </NavigationMenuItem>*/}
        {/*      <NavigationMenuItem>*/}
        {/*        <NavigationMenuLink*/}
        {/*          asChild*/}
        {/*          className={`${navigationMenuTriggerStyle()} bg-transparent text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-950/30 font-medium text-sm`}*/}
        {/*        >*/}
        {/*          <a href="/about">About</a>*/}
        {/*        </NavigationMenuLink>*/}
        {/*      </NavigationMenuItem>*/}
        {/*    </NavigationMenuList>*/}
        {/*  </NavigationMenu>*/}
        {/*</div>*/}
        <div className="flex items-center justify-end ml-auto">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
