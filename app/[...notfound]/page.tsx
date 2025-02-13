import { Button } from "@chakra-ui/react";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-7xl font-bold text-[#0d2d49]">404</h1>
        <h2 className="text-2xl font-semibold text-[#0d2d49] md:mt-4 mt-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link href="/">
          <div className="flex gap-1 text-red-500 items-center hover:scale-110 transition-transform duration-300 mt-4">
            <FaArrowLeft></FaArrowLeft>
            <Button className=" font-bold">Go Home</Button>
          </div>
        </Link>
    </div>
  );
};

export default NotFoundPage;
