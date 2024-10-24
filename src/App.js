import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HomePage from "./components/Home/Home";
import CoursesPage from "./components/Course/Courses";
import AboutUsPage from "./components/AboutUs/AboutUs";
import WhyChooseUsPage from "./components/WhyChooseUs/WhyChooseUs";
import BlogsPage from "./components/Blog/Blogs";
import TalkToUsPage from "./components/ContactUs/ContactUs";
import BecomeAPartnerPage from "./components/BecomeApartner/BecomeAPartner";
import CourseDetailPage from "./components/Course/CourseDetail/CourseDetail";
import LoginPage from "./components/Login/Login";
import TidioChat from "./components/ChatBot/TidioChat";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/talk-to-us" element={<TalkToUsPage />} />
          <Route path="/become-a-partner" element={<BecomeAPartnerPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <TidioChat />
      </Layout>
    </Router>
  );
}

export default App;
