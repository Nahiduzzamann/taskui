"use client";

import React from "react";
import Image from "next/image";

interface TrainingCard {
  title: string;
  date: string;
  time: string;
  speaker: string;
  price: string;
  image: string;
}

interface CourseShowContainerProps {
  title: string;
  backgroundColor?: string;
  cards: TrainingCard[];
}

const CourseShowContainer: React.FC<CourseShowContainerProps> = ({
  title,
  backgroundColor = "bg-white",
  cards,
}) => {
  return (
    <div className={` ${backgroundColor}`}>
      <div className={` px-3 container mx-auto `}>
        <h2 className="text-center md:text-left text-2xl lg:text-3xl font-semibold text-[#0F303B] uppercase pt-6 md:pt-10">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4  py-6 md:py-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative w-full h-44">
                <Image
                  src={card.image}
                  alt={card.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
                <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                  ৳ {card.price}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm mb-1">Date: {card.date}</p>
                <p className="text-gray-600 text-sm mb-1">Time: {card.time}</p>
                <p className="text-gray-700 text-sm font-medium">
                  Speaker: {card.speaker}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-6">
          <div className="bg-[#171339FA] px-5 py-2 text-[#dd8c2e] hover:bg-[#3d2e2e] transition uppercase cursor-pointer">
            View All
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseShowContainer;
