"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiShoppingCart, FiGrid } from "react-icons/fi";
import Image from "next/image";
import logo1 from "../../public/Images/logo1.png";
import { FaXmark } from "react-icons/fa6";
import { useCardContext } from "../providers/CardContextProvider";

type SidebarProps = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const { cart } = useCardContext();
  return (
    <>
      {/* Sidebar */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="fixed top-0 left-0 w-64 h-full bg-lightWhite  shadow-lg z-50 pl-5 py-5 px-2 flex flex-col space-y-6 md:hidden"
      >
        <div className="flex gap-6 justify-between items-center">
          <Link href="/">
            <Image src={logo1} alt="Logo" className="cursor-pointer" />
          </Link>
          <div className="">
            <FaXmark
              onClick={toggleSidebar}
              className="h-6 w-6 hover:scale-110 transition-transform duration-300 cursor-pointer text-darkBlack   "
            />
          </div>
        </div>

        <nav className="flex flex-col space-y-4 text-darkBlack   ">
          <Link
            href="/"
            className="text-lg hover:text-goldenYellow"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="text-lg hover:text-goldenYellow "
            onClick={toggleSidebar}
          >
            <div className="flex items-center gap-2">
              <FiGrid /> Courses
            </div>
          </Link>
          <Link
            href="/bundle-courses"
            className="text-lg hover:text-goldenYellow"
            onClick={toggleSidebar}
          >
            Bundle Courses
          </Link>
          <Link
            href="/summit"
            className="text-lg hover:text-goldenYellow "
            onClick={toggleSidebar}
          >
            Summit
          </Link>
          <Link
            href="/others"
            className="text-lg hover:text-goldenYellow"
            onClick={toggleSidebar}
          >
            Others
          </Link>
          <Link
            href="/career-track"
            className="text-lg hover:text-goldenYellow"
            onClick={toggleSidebar}
          >
            <button className="bg-red-500 text-lightWhite  rounded-md px-4 py-2">
              Career Track
            </button>
          </Link>
          <Link
            href="/cart"
            className="text-lg hover:text-goldenYellow"
            onClick={toggleSidebar}
          >
            <div className="flex items-center gap-2">
              <FiShoppingCart /> Cart{" "}
              <span className="text-sm ">
                {cart?.length > 0 ? cart?.length : "0"}
              </span>
            </div>
          </Link>
        </nav>
      </motion.div>
    </>
  );
};

export default Sidebar;
