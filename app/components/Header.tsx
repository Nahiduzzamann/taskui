"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAlignRight, FaArrowDown, FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import logo from "../../public/Images/logo.jpg";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  Button,
  DrawerTitle,
} from "@chakra-ui/react";

const links = [
  { name: "HOME", href: "/" },
  {
    name: "COURSES",
    href: "/courses",
    dropdown: ["Course 1", "Course 2", "Course 3"],
  },
  { name: "BUNDLE COURSES", href: "/bundle-courses" },
  { name: "SUMMIT", href: "/summit", dropdown: ["Event 1", "Event 2"] },
  { name: "OTHERS", href: "/others", dropdown: ["Option 1", "Option 2"] },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute w-full">
      {/* Top Bar */}
      <div className="bg-[#0d2d49]">
        <div className="container mx-auto flex justify-between items-center p-2 px-5">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={45}
              height={45}
              className="cursor-pointer"
            />
          </Link>
          <div className="relative border border-white mx-2">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="h-8 pl-2 pr-9 lg:w-96 w-full text-gray-700 outline-none"
            />
            <button className="absolute right-0 top-0 bg-[#0d2d49] h-full w-7 flex justify-center items-center hover:bg-[#1e4364] transition-colors duration-300">
              <FaSearch className=" text-white" />
            </button>
          </div>
          <Link href="/pages/Login">
            <button className="bg-white text-primary px-4 py-1 rounded-full hover:bg-gray-200  transition-colors duration-300 font-semibold hover:underline">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center px-3 py-2 md:p-3">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={65}
              height={65}
              className="cursor-pointer"
            />
          </Link>
          <div className="flex gap-4">
            <ul className="lg:flex space-x-6 items-center hidden">
              {links.map((link) => (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="text-black hover:text-blue-600"
                  >
                    {link.name}
                    {link.dropdown && (
                      <FaArrowDown className="inline w-4 h-4 ml-1" />
                    )}
                  </Link>
                  {link.dropdown && (
                    <ul className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <Link
                            href={`${link.href}/${item
                              .toLowerCase()
                              .replace(" ", "-")}`}
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <div className="md:flex items-center gap-4 hidden">
              <Link href="/pages/CareerTrack">
                <div className="bg-[#d33] text-white px-4 py-2 rounded hover:bg-red-500 transition">
                  CAREER TRACK
                </div>
              </Link>
              <Link href="/" className="relative">
                <FaBagShopping className="text-2xl text-gray-700 w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                  0
                </span>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <FaAlignRight
              onClick={() => setOpen(!open)}
              className="h-6 w-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          </div>
        </div>
      </nav>
      <div className=" absolute h-full top-0">
        {/* drawer */}
      <DrawerRoot
      
        placement="start"
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
      >
        <DrawerBackdrop />

        <DrawerContent height='full'>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button onClick={() => setOpen(!open)} variant="outline">
                Cancel
              </Button>
            </DrawerActionTrigger>
            <Button>Save</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
      </div>
    </div>
  );
};

export default Header;
