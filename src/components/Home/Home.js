import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialSection from "../Testimonial/Testimonial";

const examCourses = [
  {
    id: 1,
    title: "IELTS Tips - Test",
    icon: "ielts",
    duration: "6 weeks",
    level: "All Levels",
    rating: 4.9,
    reviews: 12500,
    instructor: "Dr. Emma Watson",
  },
  {
    id: 2,
    title: "IELTS Vocabulary",
    icon: "gre",
    duration: "8 weeks",
    level: "Advanced",
    rating: 4.8,
    reviews: 10300,
    instructor: "Prof. Robert Chen",
  },
  {
    id: 3,
    title: "Academic IELTS",
    icon: "gmat",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    reviews: 9200,
    instructor: "Sarah Johnson, MBA",
  },
  {
    id: 4,
    title: "IELTS Grammar",
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
      <section
        className="text-white py-16"
        style={{ backgroundColor: "#01579b" }}
      >
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold mb-4">
              Study Towards Your Dream Destination
            </h1>
            <p className="mb-8 text-purple-200">
              Real-Time AI Based Results , Live Online Class Access Thousands Of
              Tests To Practice
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
              src="https://studystreak.in/static/media/about_10.c6fba820cc5e8886a5dd.png"
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
            <div className="bg-white rounded-lg p-6 flex items-center space-x-4 w-1/3 mx-2 shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">All Major Test Preparations</h3>
                <p className="text-sm text-gray-600">
                  IELTS, GRE, GMAT, TOEFL, PTE
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-center space-x-4 w-1/3 mx-2 shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Expert Instruction</h3>
                <p className="text-sm text-gray-600">Expert Instruction</p>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6 flex items-center space-x-4 w-1/3 mx-2 shadow-sm">
              <div className="bg-orange-100 p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold">Guaranteed Results</h3>
                <p className="text-sm text-gray-600">
                  Improve your scores or money back
                </p>
              </div>
            </div>
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
                    src={`https://blr1.vultrobjects.com/studystreak-media/media/course_thumbnails/free-study-abroad-guidance-and-counselling-in-education-m.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8HTYA3DMIUS10Z3LMH24%2F20241024%2Fblr1%2Fs3%2Faws4_request&X-Amz-Date=20241024T123424Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e048ac9e4eca209f333f9de2a025466b9d187cd64712948b8fb4f5162d068bef`}
                    alt={course.title}
                    className="mb-2"
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
                    <span className="text-xs text-gray-600">
                      {course.instructor}
                    </span>
                  </div>
                  <Link
                    to={`/course/${course.id}`}
                    className="block w-full text-center bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition mt-2"
                    style={{ backgroundColor: "#01579b" }}
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
                      src={`https://blr1.vultrobjects.com/studystreak-media/media/course_thumbnails/free-study-abroad-guidance-and-counselling-in-education-m.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=8HTYA3DMIUS10Z3LMH24%2F20241024%2Fblr1%2Fs3%2Faws4_request&X-Amz-Date=20241024T123424Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=e048ac9e4eca209f333f9de2a025466b9d187cd64712948b8fb4f5162d068bef`}
                      alt={course.title}
                      className="mb-2"
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
                      style={{ backgroundColor: "#01579b" }}
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
      <section>
        <div className="container mx-auto px-4 p-4">
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
                <button
                  className="w-full  text-white py-2 rounded-md hover:bg-purple-700 transition"
                  style={{ backgroundColor: "#01579b" }}
                >
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-16 text-white"
        style={{ backgroundColor: "#01579b" }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="mb-8 text-purple-200">
            Join thousands of students who have achieved their dream scores with
            STUDYSTREAK.
          </p>
          <button
            className="bg-white  px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold"
            style={{ color: "#01579b" }}
          >
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
