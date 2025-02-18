"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo1 from "../../public/Images/logo1.png";
import google from "../../public/Images/google.png";
import app from "../../public/Images/app.png";
import { usePathname } from "next/navigation";
const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={` w-full bg-yellow pb-6 ${
        pathname === "/pages/Login" || pathname === "/pages/SignUp" ? "" : "absolute bottom-0"
      }`}
    >
      <div className="container mx-auto text-lightWhite   py-6 px-2 grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8">
        <div>
          <div className="flex items-center mb-2 md:mb-4">
            <Image
              src={logo1}
              alt="Cookbd Logo"
              className="h-12 md:w-24 w-24"
            />
          </div>
          <p className="text-lightWhite text-sm">
            If you have any questions or concerns, please feel free to contact
            us at
          </p>
        </div>

        <div>
          <h3 className="text-lightWhite font-bold mb-1 md:mb-4">Company</h3>
          <ul className="text-lightWhite md:space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lightWhite font-bold mb-1 md:mb-4">Contact</h3>
          <ul className="text-lightWhite md:space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Help & Support
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Partner with us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lightWhite font-bold mb-1 md:mb-4">Legal</h3>
          <ul className="text-lightWhite md:space-y-2">
            <li>
              <Link href="#" className="hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Refund & Cancellation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="">
          <h3 className="text-lightWhite font-bold mb-1 md:mb-4">
            Get in touch
          </h3>
          <div className="space-y-2 mt-2">
            <Image src={google} alt="Google Play" className="h-10 w-36" />
            <Image src={app} alt="App Store" className="h-12 w-36" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
