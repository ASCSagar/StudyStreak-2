import React, { useState } from "react";
import { Clock, BarChart, Star, ChevronDown, ChevronUp } from "lucide-react";
import Testimonial from "../../Testimonial/Testimonial";

// Course data
const course = {
  id: 1,
  title: "IELTS Academic Premium",
  instructor: "Instructor-1",
  category: "IELTS",
  startDate: "31-Mar-2024",
  endDate: "01-Jan-2025",
  level: "Beginner",
  language: "Gujarati & English",
  maxEnroll: 500,
  batchTimes: ["11:00 AM", "06:00 PM", "03:00 PM"],
  batchType: "Regular Batch",
  bannerImage: "/course-banner.jpg",
  description:
    "Comprehensive IELTS preparation course covering all four modules.",
  curriculum: [
    {
      title: "Section 1: Introduction to IELTS",
      lessons: ["Lesson 1 - What is the IELTS?"],
    },
    // ... other sections
  ],
};

const packages = [
  {
    name: "IELTS Express",
    price: 2999,
    features: [
      "Speaking Test (1)",
      "Writing Evaluation (1)",
      "Practice Test (1)",
      "Full Length Test (1)",
      "Speaking Practice (1)",
      "Tutor Support (1)",
      "Webinar (1)",
      "Counselling (1)",
      "Group Doubt Solving (1)",
      "One To One Doubt Solving (1)",
    ],
  },
  {
    name: "IELTS Gold",
    price: 3999,
    features: [
      "Speaking Test (10)",
      "Writing Evaluation (1)",
      "Practice Test (10)",
      "Full Length Test (10)",
      "Speaking Practice (5)",
      "Tutor Support (4)",
      "Webinar (4)",
      "Counselling (4)",
      "Group Doubt Solving (4)",
      "One To One Doubt Solving (10)",
    ],
  },
];

const relatedCourses = [
  {
    title: "GRE Comprehensive Prep",
    instructor: "Prof. Robert Chen",
    duration: "8 weeks",
    level: "Advanced",
    rating: 4.8,
    students: 10300,
    price: 249,
  },
  {
    title: "GMAT Intensive Program",
    instructor: "Sarah Johnson, MBA",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 9200,
    price: 299,
  },
  {
    title: "TOEFL iBT Success Course",
    instructor: "Michael Brown, PhD",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.9,
    students: 11400,
    price: 179,
  },
];

const CourseDetail = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [openSection, setOpenSection] = useState(
    "Section 1: Introduction to IELTS"
  );

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Floating Enroll Now Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-green-500 text-white px-8 py-3 rounded-full hover:bg-green-600 transition text-lg font-semibold shadow-lg">
          Enroll Now
        </button>
      </div>

      {/* Course Banner */}
      <div
        className="relative h-80 bg-cover bg-center"
        style={{ backgroundImage: `url(${course.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">{course.title}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Course Information */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Course Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Instructor:</strong> {course.instructor}
              </p>
              <p>
                <strong>Category:</strong> {course.category}
              </p>
              <p>
                <strong>Start Date:</strong> {course.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {course.endDate}
              </p>
              <p>
                <strong>Batch Type:</strong> {course.batchType}
              </p>
            </div>
            <div>
              <p>
                <strong>Course Level:</strong> {course.level}
              </p>
              <p>
                <strong>Language:</strong> {course.language}
              </p>
              <p>
                <strong>Max Enrollment:</strong> {course.maxEnroll}
              </p>
              <p>
                <strong>Batch Start Times:</strong>{" "}
                {course.batchTimes.join(", ")}
              </p>
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
              <p className="text-3xl font-bold mb-4">₹{pkg.price}</p>
              <ul className="mb-4">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-center mb-2">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 rounded-md ${
                  selectedPackage === index
                    ? "bg-purple-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
                onClick={() => setSelectedPackage(index)}
              >
                {selectedPackage === index ? "Selected" : "Select Package"}
              </button>
            </div>
          ))}
        </div>

        {/* Curriculum */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
          {course.curriculum.map((section, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-md"
                onClick={() =>
                  setOpenSection(
                    openSection === section.title ? null : section.title
                  )
                }
              >
                <span>{section.title}</span>
                {openSection === section.title ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>
              {openSection === section.title && (
                <ul className="mt-2 ml-6">
                  {section.lessons.map((lesson, i) => (
                    <li key={i} className="mb-2">
                      {lesson}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Related Courses */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Related Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.instructor}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock size={16} className="mr-2" />
                    <span>{course.duration}</span>
                    <BarChart size={16} className="ml-4 mr-2" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">{course.rating}</span>
                    <span className="ml-2 text-sm text-gray-500">
                      ({course.students.toLocaleString()} students)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${course.price}</span>
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <Testimonial />

        {/* Register for Webinar */}
        <div className="bg-purple-100 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            Register for Free Webinar
          </h2>
          <p className="mb-4">
            Join our free webinar to learn more about IELTS preparation
            strategies and tips.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-grow px-4 py-2 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-grow px-4 py-2 rounded-md"
            />
            <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
