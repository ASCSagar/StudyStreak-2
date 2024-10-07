import React from "react";
import { Link } from "react-router-dom";
import { Search, User } from "lucide-react";

const Layout = ({ children }) => {
  const navigationItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About Us", path: "/about-us" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Blogs", path: "/blogs" },
    { name: "Talk to Us", path: "/talk-to-us" },
    { name: "Become a Partner", path: "/become-a-partner" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="text-xl font-bold text-blue-600">
              STUDYSTREAK
            </Link>
            <div className="flex items-center space-x-6">
              {navigationItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-600 hover:text-purple-600"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/login" className="text-gray-600 hover:text-purple-600">
                Login / Register
              </Link>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="pl-8 pr-4 py-2 border rounded-full text-sm"
                />
                <Search
                  className="absolute left-2 top-2.5 text-gray-400"
                  size={16}
                />
              </div>
              <User className="text-gray-600" size={20} />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About STUDYSTREAK</h3>
              <p className="text-gray-400">
                Empowering students worldwide to achieve their academic goals
                through expert-led courses and innovative learning techniques.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Exams We Cover</h3>
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
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">
                1234 Study Street, Learn City, ED 5678
              </p>
              <p className="text-gray-400 mb-2">Phone: +1 (123) 456-7890</p>
              <p className="text-gray-400 mb-4">Email: info@studystreak.com</p>
              <div className="flex space-x-4">{/* Social media icons */}</div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 STUDYSTREAK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
