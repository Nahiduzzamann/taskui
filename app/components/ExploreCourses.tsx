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
    <section className="py-8 px-4">
      <h2 className="text-xl md:text-2xl lg:text-3xl font-normal mb-6 text-black uppercase">Explore Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => (
          <button
            key={index}
            className="w-full border-2 border-gray-300 rounded-lg py-4 text-center font-semibold hover:bg-blue-100 transition-all hover:scale-105 duration-300"
          >
            {course}
          </button>
        ))}
      </div>
    </section>
  );
};

export default ExploreCourses;
