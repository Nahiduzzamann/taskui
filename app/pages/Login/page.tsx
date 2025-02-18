"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="md:h-screen flex justify-center items-center p-4 bg-lightWhite">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md"
      >
        <h2 className="text-darkBlack text-3xl font-bold text-center mb-2">
          Sign In
        </h2>
        <p className="text-darkBlack text-center mb-6">
          Please login to your account to continue
        </p>
        <div className="mb-4">
          <input
            type="text"
            placeholder="E-mail Or Phone"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-yellow rounded-full px-4 py-2 focus:outline-none bg-lightWhite"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-yellow rounded-full px-4 py-2 focus:outline-none bg-lightWhite"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-darkBlack cursor-pointer"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <label className="flex items-center text-darkBlack">
            <input type="checkbox" className="mr-2 bg-lightWhite " />
            Keep me signed in
          </label>
          <Link href="#" className="text-yellow hover:underline">
            Forget Password?
          </Link>
        </div>
        <button
          type="submit"
          className="w-full hover:shadow hover:bg-goldenYellow  bg-yellow text-white rounded-full py-2 font-bold"
        >
          Sign In
        </button>
        {/* <div className="text-center my-4 text-lightGray">or</div>
        <div className="flex justify-center gap-4 mb-6">
          <button className="bg-lightGray rounded-full p-2 flex items-center gap-2">
            <FaFacebook className="text-blue-600" /> Facebook
          </button>
          <button className="bg-lightGray rounded-full p-2 flex items-center gap-2">
            <FaGoogle className="text-red-600" /> Google
          </button>
        </div> */}
        <p className="text-center text-darkBlack mt-2">
          Not a member yet?{" "}
          <Link href="/pages/SignUp" className="text-yellow hover:underline">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
