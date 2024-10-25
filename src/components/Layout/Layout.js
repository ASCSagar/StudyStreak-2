import React from "react";
import { Link, useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideFooterPaths = ["/login", "/register"];
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About-Us", path: "/about-us" },
    { name: "Why-Choose-Us", path: "/why-choose-us" },
    { name: "Blogs", path: "/blogs" },
    { name: "Podcast", path: "/podcast" },
    { name: "Talk-to-Us", path: "/talk-to-us" },
    { name: "Become-a-Partner", path: "/become-a-partner" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Full Width Navigation */}
      <nav className="w-full bg-primary-100 shadow-md sticky top-0 z-50">
        <div className="w-full max-w-[2000px] mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="text-xl font-bold text-blue-600 ml-20">
              StudyStreak
            </Link>

            <div className="flex items-center space-x-5">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                to="/login"
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Login/Register
              </Link>

              <button className="bg-primary-500 text-white px-6 py-2 rounded-xl shadow-soft hover:shadow-hover transition-shadow">
                Free Mini Test
              </button>

              <button className="bg-secondary-500 text-white px-6 py-2 rounded-xl shadow-soft hover:shadow-hover transition-shadow">
                Diagnostic test
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      {!hideFooterPaths.includes(location.pathname) && (
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#ffffff" }}
                >
                  About StudyStreak
                </h3>
                <p className="text-gray-400">
                  Empowering students worldwide to achieve their academic goals
                  through expert-led courses and innovative learning techniques.
                </p>
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Exams We Cover
                </h3>
                <ul className="text-gray-400">
                  <li className="mb-2">
                    <Link to="/courses/ielts" className="hover:text-white">
                      IELTS
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/courses/gre" className="hover:text-white">
                      GRE
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/courses/gmat" className="hover:text-white">
                      GMAT
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/courses/toefl" className="hover:text-white">
                      TOEFL
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/pte" className="hover:text-white">
                      PTE Academic
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Quick Links
                </h3>
                <ul className="text-gray-400">
                  <li className="mb-2">
                    <Link to="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/courses" className="hover:text-white">
                      Courses
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/about-us" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="hover:text-white">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ color: "#ffffff" }}
                >
                  Contact Us
                </h3>
                <p className="text-gray-400 mb-2">
                  1st and 2nd Floor, Galav Chambers, Dairy Den Circle,
                  Sayajigunj, Vadodara, Gujarat, India - 390020
                </p>
                <p className="text-gray-400 mb-2">Phone: (+91) 91069 95326</p>
                <p className="text-gray-400 mb-4">
                  Email: reachus@studystreak.io
                </p>
                <div className="flex space-x-4">{/* Social media icons */}</div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p style={{ color: "#ffffff", fontWeight: "bold" }}>
                &copy; 2024 StudyStreak. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
