import Banner from "@/app/components/Banner";
import ExploreCourses from "@/app/components/ExploreCourses";
import CourseShowContainer from "@/app/components/TrainingContainer";
import { dummyData } from "@/app/data/dummyData";
import React from "react";

export default function UserHome() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <div>
        <Banner></Banner>
        <ExploreCourses></ExploreCourses>
        <CourseShowContainer
          cardToShow={4}
          title={dummyData.title}
          backgroundColor="bg-[#eee]"
          cards={dummyData.data}
        />
        <CourseShowContainer
          cardToShow={8}
          title={dummyData.title}
          backgroundColor="bg-white"
          cards={dummyData.data}
        />
        <CourseShowContainer
          cardToShow={4}
          title={dummyData.title}
          backgroundColor="bg-[#eee]"
          cards={dummyData.data}
        />
        <CourseShowContainer
          cardToShow={6}
          title={dummyData.title}
          backgroundColor="bg-white"
          cards={dummyData.data}
        />
        <CourseShowContainer
          cardToShow={4}
          title={dummyData.title}
          backgroundColor="bg-[#eee]"
          cards={dummyData.data}
        />
        <CourseShowContainer
          cardToShow={4}
          title={dummyData.title}
          backgroundColor="bg-white"
          cards={dummyData.data}
        />
      </div>
    </div>
  );
}
