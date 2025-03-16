import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function NavBar({ title }) {
  // Define navigation links directly in the component
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
    { name: "Services", path: "/services" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <div className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="flex justify-between items-center h-16 px-6 py-4 mx-auto max-w-7xl">
        {/* Logo / Title */}
        <div>
          <Link to="/" className="text-lg font-mono font-bold">
            {title}
          </Link>
        </div>

        {/* Navigation Links */}
        <div>
          <div className="flex space-x-6">
            {navLinks.slice(0, 5).map((link, index) => (
              <div key={index} className="p-2 font-bold">
                <Link to={link.path} className="hover:text-gray-600">
                  {link.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}