import React from "react";
import Navbar from "./Navbar"; // Import Navbar component

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar title="Contact" />

      {/* Contact Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Get In Touch
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-md text-center mb-6">
          Have a question or want to work together? Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="space-y-3 text-center">
          <p className="text-lg">
            📧 Email:{" "}
            <a
              href="mailto:yourname@example.com"
              className="text-blue-500 hover:underline"
            >
              mohamedabdinoor701@gmail.com
            </a>
          </p>
          <p className="text-lg">
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/abdinoor-mohamed-3935b0229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
 mohamedabdinoor701@gmail.com            </a>
          </p>
          <p className="text-lg">
            💻 GitHub:{" "}
            <a
              href="http://github.com/abdinoor12345/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              abdinoor12345
            </a>
          </p>
        </div>
      </div>

      {/* Footer */}
       
    </div>
  );
}
