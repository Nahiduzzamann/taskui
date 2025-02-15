"use client";
import { useState } from "react";
import { useCardContext } from "../providers/CardContextProvider";
import Image from "next/image";
import { CardData } from "../types";

interface UpcomingCourseCardProps {
  card: CardData;
}

const UpcomingCourseCard: React.FC<UpcomingCourseCardProps> = ({ card }) => {
  const { addToCart } = useCardContext();
  const [hover, setHover] = useState(false);

  return (
    <div className="border shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden flex flex-col justify-between bg-lightWhite  ">
      <div>
        <div
          className="relative w-full h-48 overflow-hidden   transition-transform duration-300 hover:scale-105 rounded"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <Image
            src={card.image}
            alt={card.title}
            layout="fill"
            objectFit="cover"
            className="transition-all duration-300"
          />
          {hover && (
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2  bg-yellow  px-3 py-2 text-lightWhite  hover:bg-goldenYellow transition uppercase cursor-pointer font-semibold text-[10px] md:text-sm"
              onClick={() => addToCart(card)}
            >
              Add to Cart
            </div>
          )}
        </div>
        <h3 className="text-lg py-4 font-semibold text-darkBlack    text-center">
          {card.title}
        </h3>
      </div>
      <div
        className="absolute top-4 right-0 bg-yellow  px-3 py-1 text-lightWhite  font-semibold text-[10px] md:text-sm"
       
      >
       ৳ {card.newPrice}
      </div>
    </div>
  );
};

export default UpcomingCourseCard;
