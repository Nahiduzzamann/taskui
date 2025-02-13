"use client";

import React from "react";
import CourseCard from "./CourseCard";
import { CardData } from "../types";

interface CourseShowContainerProps {
  title: string;
  backgroundColor?: string;
  cards: CardData[];
  cardToShow: number;
}

const CourseShowContainer: React.FC<CourseShowContainerProps> = ({
  title,
  backgroundColor = "bg-white",
  cards,
  cardToShow,
}) => {
  return (
    <div className={` ${backgroundColor}`}>
      <div className={`py-2 px-3 container mx-auto `}>
        <h2 className="text-center md:text-left text-2xl lg:text-3xl font-semibold text-[#0F303B] uppercase pt-6 md:pt-10">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4  py-6 md:py-8">
          {cards?.slice(0, cardToShow)?.map((card, index) => (
            <CourseCard key={index} card={card} />
          ))}
        </div>
        {cardToShow > cards?.length ? (
          <div></div>
        ) : (
          <div className="flex justify-end mt-6">
            <div className="bg-[#171339FA] px-5 py-2 text-[#dd8c2e] hover:bg-[#3d2e2e] transition uppercase cursor-pointer">
              View All
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseShowContainer;
