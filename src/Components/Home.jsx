import React from "react";
import noor1 from "../assets/noor1.jpeg"; // Adjust the path based on your structure
import Navbar from "./Navbar";
import SignUpForm from "./SignUpForm"
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Mywork from "./Mywork";
import Footer from "./Footer";

// Array of navigation links
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "services", path: "/servics" },
  { name: "Faq", path: "/faq" },

];

export default function Home() {
  return (
    <>
      <Navbar title="NOOR" navLinks={navLinks} />

      {/* Main Section */}
      <div className="bg-gray-100 w-full h-full py-12 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          
          {/* Text Section */}
          <div className="p-6">
            <h2 className="text-4xl text-blue-500 font-extrabold">
              Hi, I'M ABDINOOR, <br /> JUNIOR DEVELOPER
            </h2>
            <p className="text-gray-800 mt-4 text-lg leading-relaxed">
              Welcome to my portfolio website. Here, you'll find my projects, skills, and ways to contact me.
              I am passionate about web development, and I enjoy building modern, responsive applications.
            </p>

            <div className="mt-6">
              <a
                href="#projects"
                className="inline-block bg-blue-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end p-6">
            <img
              src={noor1}
              alt="Profile"
              className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-blue-500 shadow-lg"
            />
          </div>

        </div>
      </div>
      <hr/>
      
      {/* Contact Form */}
      <div className="flex flex-wrap justify-center items-start gap-8 p-6">
        <About/>
        <hr/>
        <Services/>
        <hr/>
        <Mywork/>
  {/* Sign-Up Form */}
     <SignUpForm />

 
    
</div>

    </>
  );
}
