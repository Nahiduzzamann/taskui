"use client";

import React from "react";
import CourseCard from "./CourseCard";
import {  Upccoming } from "../types";
import UpcomingCourseCard from "./UpcomingCourseCard";

interface CourseShowContainerProps {
  title: string;
  backgroundColor?: string;
  cards: Upccoming;
  cardToShow: number;
}

const CourseShowContainer: React.FC<CourseShowContainerProps> = ({
  title,
  backgroundColor = "bg-lightWhite ",
  cards,
  cardToShow,
}) => {
  return (
    <div className={` ${backgroundColor}`}>
      <div className={`py-2 px-3 container mx-auto `}>
        <h2 className="text-center md:text-left text-2xl lg:text-3xl font-semibold text-darkBlack   uppercase pt-6 md:pt-10">
          {title}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4  py-6 md:py-8">
          {
            cards.upcomingCourse ? cards?.data?.map((card, index) => (
              <UpcomingCourseCard key={index} card={card} />
            )) : cards?.data?.map((card, index) => (
              <CourseCard key={index} card={card} />
            ))
          }
          
        </div>
        {cardToShow > cards?.data?.length? (
          <div></div>
        ) : (
          <div className="flex justify-end mt-6">
            <div className="bg-yellow  px-5 py-2 text-lightWhite   hover:bg-goldenYellow transition uppercase cursor-pointer">
              View All
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseShowContainer;
