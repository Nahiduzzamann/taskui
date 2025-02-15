import Banner from "@/app/components/Banner";
import CompanySlider from "@/app/components/CompanySlider";
import ExploreCourses from "@/app/components/ExploreCourses";
import ScrollToTop from "@/app/components/ScrollToTop";
import CourseShowContainer from "@/app/components/TrainingContainer";
import { dummyData } from "@/app/data/dummyData";
import { dummyDataUpcoming } from "@/app/data/dummyDataUpcoming";
import React from "react";

export default function UserHome() {
  return (
    <div className="pt-36 md:pt-40 bg-primaryBg">
      <div>
        <Banner></Banner>
        <ExploreCourses></ExploreCourses>
        <CourseShowContainer
          cardToShow={4}
          title={dummyData.title}
          backgroundColor="bg-secondaryBg"
          cards={dummyDataUpcoming}
        />
        <CourseShowContainer
          cardToShow={8}
          title={dummyData.title}
          backgroundColor="bg-primaryBg"
          cards={dummyData}
        />
        <CourseShowContainer
          cardToShow={4}
          title={dummyData.title}
          backgroundColor="bg-secondaryBg"
          cards={dummyData}
        />
        <CourseShowContainer
          cardToShow={6}
          title={dummyData.title}
          backgroundColor="bg-primaryBg"
          cards={dummyData}
        />
        <div className="flex flex-col items-center justify-center bg-secondaryBg">
          <CompanySlider />
        </div>
        <ScrollToTop />
      </div>
    </div>
  );
}
