import React from "react";

const courses = [
  "Generative AI",
  "Data Science",
  "Marketing",
  "HR Management",
  "Accounting",
  "Personal Development",
  "Academic Research",
  "Leadership",
];

const ExploreCourses = () => {
  return (
    <section className=" px-3 container mx-auto">
      <h2 className="text-center md:text-left text-2xl lg:text-3xl font-semibold text-darkBlack   uppercase pt-6 md:pt-10">
        Explore Courses
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 py-6 md:py-8">
        {courses.map((course, index) => (
          <button
            key={index}
            className="w-full border-2 border-goldenYellow rounded-lg py-2 text-center font-semibold hover:bg-goldenYellow transition-all hover:scale-105 duration-300 text-darkBlack   "
          >
            {course}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ExploreCourses;
