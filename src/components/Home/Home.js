import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialSection from "../Testimonial/Testimonial";

const features = [
  {
    title: "5 Major Test Preparations",
    description: "IELTS, GRE, GMAT, TOEFL, PTE",
  },
  {
    title: "Expert Instruction",
    description: "Learn from certified professionals",
  },
  {
    title: "Guaranteed Results",
    description: "Improve your scores or money back",
  },
];

const examCourses = [
  {
    id: 1,
    title: "IELTS Mastery Course",
    icon: "ielts",
    duration: "6 weeks",
    level: "All Levels",
    rating: 4.9,
    reviews: 12500,
    instructor: "Dr. Emma Watson",
  },
  {
    id: 2,
    title: "GRE Comprehensive Prep",
    icon: "gre",
    duration: "8 weeks",
    level: "Advanced",
    rating: 4.8,
    reviews: 10300,
    instructor: "Prof. Robert Chen",
  },
  {
    id: 3,
    title: "GMAT Intensive Program",
    icon: "gmat",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    reviews: 9200,
    instructor: "Sarah Johnson, MBA",
  },
  {
    id: 4,
    title: "TOEFL iBT Success Course",
    icon: "toefl",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.9,
    reviews: 11400,
    instructor: "Michael Brown, PhD",
  },
];

const pteCourses = [
  {
    id: 5,
    title: "PTE Academic Exam Prep",
    icon: "pte",
    duration: "4 weeks",
    level: "All Levels",
  },
  {
    id: 6,
    title: "PTE Speaking Mastery",
    icon: "pte-speaking",
    duration: "2 weeks",
    level: "Intermediate",
  },
  {
    id: 7,
    title: "PTE Writing Skills",
    icon: "pte-writing",
    duration: "2 weeks",
    level: "Advanced",
  },
  {
    id: 8,
    title: "PTE Reading Techniques",
    icon: "pte-reading",
    duration: "2 weeks",
    level: "Beginner",
  },
];

const upcomingWebinars = [
  {
    title: "IELTS Writing Task 2 Strategies",
    date: "2024-10-15",
    time: "14:00 UTC",
    instructor: "Dr. Emma Watson",
  },
  {
    title: "GRE Quantitative Reasoning Tips",
    date: "2024-10-18",
    time: "18:00 UTC",
    instructor: "Prof. Robert Chen",
  },
  {
    title: "TOEFL Speaking Section Mastery",
    date: "2024-10-20",
    time: "16:00 UTC",
    instructor: "Michael Brown, PhD",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
    
      {/* Hero Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Ace Your Exams with STUDYSTREAK
            </h1>
            <p className="mb-8 text-purple-200">
              Expert-led courses for IELTS, GRE, GMAT, TOEFL, and PTE. Designed
              for ambitious students aiming for top scores.
            </p>
            <div className="space-x-4">
              <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition">
                Explore Courses
              </button>
              <button className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-800 transition">
                Free Practice Test
              </button>
            </div>
          </div>
          <div className="w-1/2 relative">
            <img
              src="/api/placeholder/600/400"
              alt="Students studying"
              className="rounded-lg"
            />
            <div className="absolute inset-0 bg-purple-600 opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center space-x-4 w-1/3 mx-2 shadow-sm"
              >
                <div className="bg-orange-100 p-3 rounded-full">
                  <svg
                    className="w-6 h-6 text-orange-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exam Courses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Popular Exam Courses</h2>
            <Link
              to="/courses"
              className="text-sm text-purple-600 hover:underline"
            >
              View All Courses
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {examCourses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div
                  className={`h-48 ${
                    [
                      "bg-blue-500",
                      "bg-green-500",
                      "bg-red-500",
                      "bg-yellow-500",
                    ][index]
                  } flex items-center justify-center`}
                >
                  <img
                    src={`/${course.icon}-icon.svg`}
                    alt={course.title}
                    className="w-16 h-16"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-sm mb-2">{course.title}</h3>
                  <div className="flex items-center text-xs text-gray-500 mb-2">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    {course.duration} • {course.level}
                  </div>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(course.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">
                      {course.rating} ({course.reviews.toLocaleString()})
                    </span>
                  </div>
                  <div className="flex items-center mb-2">
                    <img
                      src={`/instructor-${index + 1}.jpg`}
                      alt={course.instructor}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-xs text-gray-600">
                      {course.instructor}
                    </span>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    className="block w-full text-center bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition mt-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PTE Courses Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">PTE Academic Courses</h2>
            <div className="flex space-x-2">
              <button className="bg-gray-200 p-2 rounded-full">
                <ChevronLeft size={20} />
              </button>
              <button className="bg-gray-200 p-2 rounded-full">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
          >
            <div className="grid grid-cols-4 gap-6">
              {pteCourses.map((course, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <div
                    className={`h-48 ${
                      [
                        "bg-purple-500",
                        "bg-indigo-500",
                        "bg-blue-500",
                        "bg-cyan-500",
                      ][index]
                    } flex items-center justify-center`}
                  >
                    <img
                      src={`/${course.icon}-icon.svg`}
                      alt={course.title}
                      className="w-16 h-16"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-sm mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      {course.duration} • {course.level}
                    </div>
                    <Link
                      to={`/course/${course.id}`}
                      className="block w-full text-center bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition mt-2"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Upcoming Webinars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Upcoming Free Webinars</h2>
          <div className="grid grid-cols-3 gap-6">
            {upcomingWebinars.map((webinar, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg mb-2">{webinar.title}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Instructor: {webinar.instructor}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                  {new Date(webinar.date).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  {webinar.time}
                </div>
                <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-purple-200">
            Join thousands of students who have achieved their dream scores with
            STUDYSTREAK.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
