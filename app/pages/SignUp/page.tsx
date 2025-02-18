'use client'
import { useState } from "react";
import Link from "next/link";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);

  };

  return (
    <div className="md:h-screen flex justify-center items-center p-4 bg-lightWhite">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-darkBlack">
          Create an account and discover the benefits
        </h2>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="w-full border border-yellow rounded-full px-4 py-2 focus:outline-none bg-lightWhite"
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full border border-yellow rounded-full px-4 py-2 focus:outline-none bg-lightWhite"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border border-yellow rounded-full px-4 py-2 focus:outline-none bg-lightWhite"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-yellow rounded-full px-4 py-2 focus:outline-none bg-lightWhite"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border border-yellow rounded-full px-4 py-2 focus:outline-none bg-lightWhite"
          required
        />
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <span className="text-sm text-darkBlack">
            I agree to The Google Terms of Service and Privacy Policy
          </span>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-yellow text-white font-bold rounded-full hover:bg-goldenYellow hover:shadow transition duration-300"
        >
          Sign Up
        </button>
        <p className="text-center text-sm text-darkBlack">
          Are you already a member?{" "}
          <Link href="/pages/Login" className="text-yellow font-bold hover:underline">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
