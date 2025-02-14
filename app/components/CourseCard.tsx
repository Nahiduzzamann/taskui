"use client";
import { useState } from "react";
import { useCardContext } from "../providers/CardContextProvider";
import Image from "next/image";
import { CardData } from "../types";

interface CourseCardProps {
  card: CardData;
}

const CourseCard: React.FC<CourseCardProps> = ({ card }) => {
  const { addToCart } = useCardContext();
  const [hover, setHover] = useState(false);

  return (
    <div className="border border-gray-300 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden flex flex-col justify-between">
      <div>
        <div
          className="relative w-full h-48 overflow-hidden   transition-transform duration-300 hover:scale-105"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src={card.image}
            alt={card.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300 border-[6px] border-black"
          />
          {hover && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2  bg-[#0A2C4C] px-3 py-2 text-white hover:bg-[#263a52] transition uppercase cursor-pointer font-semibold text-[10px] md:text-sm"
              onClick={() => addToCart(card)}
            >
              Add to Cart
            </div>
          )}
        </div>
        <h3 className="text-lg py-2 font-semibold text-[#333333] text-center">
          {card.title}
        </h3>
      </div>
      <div className="my-3 mx-4">
        <div className=" flex">
          <div className="h-[2px] bg-gray-300 w-full"></div>
          <div className="h-[2px] bg-[#0A2C4C] w-24"></div>
          <div className="h-[2px] bg-gray-300 w-full"></div>
        </div>
        <div className="my-2 gap-2 flex justify-end items-center">
          <p className="text-[#999999] font-semibold font-sans text-lg lg:text-xl  line-through">
            <span className="">৳</span>
            {card.newPrice}
          </p>
          {card.oldPrice && (
            <p className="text-red-600 font-semibold font-sans text-xl lg:text-2xl ">
              ৳{card.oldPrice}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
