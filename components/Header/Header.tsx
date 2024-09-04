"use client";

import { navLinks } from "@/constants";
import { Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <Navbar fluid rounded-none className="bg-slate-600">
      <Navbar.Brand
        as={Link}
        href="/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <Image
          src="/develops-today-logo.webp"
          className="h-8"
          alt="DevelopsTodat Logo"
          width={32}
          height={32}
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
          DevelopsToday
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navLinks.map((link) => (
          <Navbar.Link
            key={link.id}
            as={Link}
            href={link.href}
            className="block py-2 px-4 text-white"
          >
            {link.name}
          </Navbar.Link>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};
