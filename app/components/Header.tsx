"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaAlignRight, FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import logo from "../../public/Images/logo.png";
import logo1 from "../../public/Images/logo1.png";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import { FiShoppingCart } from "react-icons/fi";
import { useCardContext } from "../providers/CardContextProvider";
import { IoIosArrowDown } from "react-icons/io";
const links = [
  { name: "HOME", href: "/" },
  {
    name: "COURSES",
    href: "/courses",
    dropdown: ["Course 1", "Course 22222222", "Course 3"],
  },
  { name: "BUNDLE COURSES", href: "/bundle-courses" },
  { name: "SUMMIT", href: "/summit", dropdown: ["Event 1", "Event 2"] },
  { name: "OTHERS", href: "/others", dropdown: ["Option 1", "Option 2"] },
];

const Header = () => {
  const { cart } = useCardContext();
  const [show, setShow] = useState(true);
  const [showShadow, setShowShadow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 80) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
      if (currentScrollY > lastScrollY + 15) {
        // Scrolling down
        setShow(false);
      } else if (currentScrollY < lastScrollY - 15) {
        // Scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  return (
    <div className="">
      {/* Top Bar */}
      <motion.div
        animate={{ y: show ? 0 : -60 }} // Hide to top
        transition={
          show
            ? { type: "spring", stiffness: 100, damping: 30 }
            : { type: "spring", stiffness: 30 }
        }
        className="bg-[#0d2d49] z-50 w-full fixed top-0 "
      >
        <div className="container mx-auto flex justify-between items-center px-5 h-[60px]">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={45}
              height={45}
              className="cursor-pointer"
            />
          </Link>
          <div className="relative border border-white mx-2 h-9">
            <input
              type="text"
              placeholder="What do you want to learn today?"
              className="h-full pl-2 pr-10 lg:w-96 w-full text-gray-700 outline-none"
            />
            <button className="absolute right-0 top-0 bg-[#0d2d49] h-full w-8 flex justify-center items-center hover:bg-[#1e4364] transition-colors duration-300">
              <FaSearch className=" text-white" />
            </button>
          </div>
          <Link href="/pages/Login">
            <button className="bg-white text-primary px-4 py-1 rounded-full hover:bg-gray-200  transition-colors duration-300 font-semibold hover:underline">
              Login
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Bottom Navigation */}
      <motion.div
        animate={{ y: show ? 0 : -60 }} // Hide to top
        transition={
          show
            ? { type: "spring", stiffness: 20 }
            : { type: "spring", stiffness: 70 }
        }
        className={` bg-white z-50 w-full fixed top-[60px] ${
          showShadow && "shadow-md"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-3 md:h-[70px] h-[50px]">
          <Link className="hidden md:block" href="/">
            <Image
              src={logo}
              alt="Logo"
              width={55}
              height={55}
              className="cursor-pointer"
            />
          </Link>
          <Link className="md:hidden" href="/">
            <Image src={logo1} alt="Logo" className="cursor-pointer" />
          </Link>
          <div className="flex gap-4">
            <ul className="lg:flex space-x-6 items-center hidden">
              {links.map((link) => (
                <li key={link.name} className="relative group">
                  <Link
                    href={link.href}
                    className="text-black font-semibold hover:text-blue-500"
                  >
                    {link.name}
                    {link.dropdown && (
                      <IoIosArrowDown className="inline w-4 h-4 mr-1" />
                    )}
                  </Link>
                  {link.dropdown && (
                    <ul className="absolute -left-8 hidden group-hover:block bg-white shadow-lg rounded-md pt-4 ">
                      {link.dropdown.map((item) => (
                        <li className="w-36 hover:underline" key={item}>
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
                <FiShoppingCart className="text-2xl text-gray-700 w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">
                  {cart?.length > 0 ? cart?.length : "0"}
                </span>
              </Link>
            </div>
          </div>
          {isOpen ? (
            <div className="md:hidden">
              <FaXmark
                onClick={toggleSidebar}
                className="h-6 w-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          ) : (
            <div className="md:hidden">
              <FaAlignRight
                onClick={toggleSidebar}
                className="h-6 w-6 hover:scale-110 transition-transform duration-300 cursor-pointer"
              />
            </div>
          )}
        </div>
      </motion.div>

      {/* drawer */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Header;
