import Banner from "@/app/components/Banner";
import ExploreCourses from "@/app/components/ExploreCourses";
import CourseShowContainer from "@/app/components/TrainingContainer";
import React from "react";
const trainingData = [
  {
    title: "Preparation of Cash Flow Statements",
    date: "February 22, 2025",
    time: "7:00 PM",
    speaker: "Imtiaz Kavas, FCA",
    price: "1000",
    image: "/images/cash-flow.jpg",
  },
  {
    title: "Masterclass on SME Finance",
    date: "March 07, 2025",
    time: "10:00 AM",
    speaker: "Md. Mashkur Rahman",
    price: "1000",
    image: "/images/sme-finance.jpg",
  },
  // Add more cards...
];

export default function UserHome() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <div>
        <Banner></Banner>
        <ExploreCourses></ExploreCourses>
        <CourseShowContainer
          title="Upcoming Live Training"
          backgroundColor="bg-[#eee]"
          cards={trainingData}
        />
        <CourseShowContainer
          title="Upcoming Live Training"
          backgroundColor="bg-white"
          cards={trainingData}
        />
        <CourseShowContainer
          title="Upcoming Live Training"
          backgroundColor="bg-[#eee]"
          cards={trainingData}
        />
        <CourseShowContainer
          title="Upcoming Live Training"
          backgroundColor="bg-white"
          cards={trainingData}
        />
        <CourseShowContainer
          title="Upcoming Live Training"
          backgroundColor="bg-[#eee]"
          cards={trainingData}
        />
        <CourseShowContainer
          title="Upcoming Live Training"
          backgroundColor="bg-white"
          cards={trainingData}
        />
      </div>
    </div>
  );
}
