import Banner from "@/app/components/Banner";
import ExploreCourses from "@/app/components/ExploreCourses";
import React from "react";

export default function UserHome() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <div>
        <Banner></Banner>
        <ExploreCourses></ExploreCourses>
      </div>
    </div>
  );
}
