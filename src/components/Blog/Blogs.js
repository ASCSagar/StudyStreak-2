import React from "react";

const Blogs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <header
        className=" text-white py-16"
        style={{ backgroundColor: "#01579b" }}
      >
        <div className="container mx-auto px-4 text-start">
          <h1 className="text-4xl font-bold mb-4">StudyStreak Blog</h1>
          <p className="text-xl">
            Stay updated with the latest tips, strategies, and news related to
            international exams and education.
          </p>
        </div>
      </header>
    </div>
  );
};

export default Blogs;
