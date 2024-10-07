import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Filter,
  Clock,
  BarChart,
  Star,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Testimonial from "../Testimonial/Testimonial";

const exams = ["All", "IELTS", "GRE", "GMAT", "TOEFL", "PTE"];

const courses = [
  {
    id: 1,
    title: "IELTS Mastery Course",
    exam: "IELTS",
    instructor: "Dr. Emma Watson",
    duration: "6 weeks",
    level: "All Levels",
    rating: 4.9,
    students: 12500,
    price: 199,
  },
  {
    id: 2,
    title: "GRE Comprehensive Prep",
    exam: "GRE",
    instructor: "Prof. Robert Chen",
    duration: "8 weeks",
    level: "Advanced",
    rating: 4.8,
    students: 10300,
    price: 249,
  },
  {
    id: 3,
    title: "GMAT Intensive Program",
    exam: "GMAT",
    instructor: "Sarah Johnson, MBA",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 9200,
    price: 299,
  },
  {
    id: 4,
    title: "TOEFL iBT Success Course",
    exam: "TOEFL",
    instructor: "Michael Brown, PhD",
    duration: "6 weeks",
    level: "Beginner",
    rating: 4.9,
    students: 11400,
    price: 179,
  },
  {
    id: 5,
    title: "PTE Academic Exam Prep",
    exam: "PTE",
    instructor: "Dr. Lisa Zhang",
    duration: "4 weeks",
    level: "All Levels",
    rating: 4.8,
    students: 8600,
    price: 159,
  },
];

const webinars = [
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

const blogPosts = [
  {
    title: "5 Essential IELTS Writing Tips",
    excerpt: "Improve your IELTS writing score with these expert tips...",
    author: "Dr. Emma Watson",
    date: "2024-09-30",
  },
  {
    title: "Mastering GRE Vocabulary",
    excerpt: "Effective strategies to build your GRE vocabulary quickly...",
    author: "Prof. Robert Chen",
    date: "2024-09-25",
  },
  {
    title: "TOEFL vs IELTS: Which Should You Take?",
    excerpt:
      "A comprehensive comparison to help you choose the right English proficiency test...",
    author: "Michael Brown, PhD",
    date: "2024-09-20",
  },
];

const Courses = () => {
  const [selectedExam, setSelectedExam] = useState("All");

  const filteredCourses =
    selectedExam === "All"
      ? courses
      : courses.filter((course) => course.exam === selectedExam);

  return (
    <div className="bg-gray-100 min-h-screen relative">
      {/* Sticky CTA Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition text-lg font-semibold shadow-lg">
          Take Free Assessment
        </button>
      </div>

      <header className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl mb-8">
            Find the perfect course to achieve your target score
          </p>
          <div className="flex">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full py-3 px-4 rounded-l-md text-gray-800"
              />
              <Search className="absolute right-3 top-3 text-gray-400" />
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-r-md hover:bg-green-600 transition">
              Search
            </button>
          </div>
        </div>
      </header>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-4">
              {exams.map((exam) => (
                <button
                  key={exam}
                  className={`px-4 py-2 rounded-full ${
                    selectedExam === exam
                      ? "bg-purple-600 text-white"
                      : "bg-white text-purple-600"
                  }`}
                  onClick={() => setSelectedExam(exam)}
                >
                  {exam}
                </button>
              ))}
            </div>
            <button className="flex items-center space-x-2 text-purple-600">
              <Filter size={20} />
              <span>More Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
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
                    <Link
                      to={`/course/${course.id}`}
                      className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Upcoming Free Webinars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webinars.map((webinar, index) => (
              <div
                key={index}
                className="bg-purple-50 rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-semibold mb-2">{webinar.title}</h3>
                <p className="text-gray-600 mb-4">{webinar.instructor}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span>
                    {new Date(webinar.date).toLocaleDateString()} at{" "}
                    {webinar.time}
                  </span>
                </div>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition w-full">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonial />

      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Latest from Our Blog
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="bg-purple-600 p-4">
                  <Link className="text-white flex items-center justify-center">
                    Read More <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition">
              View All Blog Posts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
