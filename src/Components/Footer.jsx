import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 mt-2">
        <a
          href="http://github.com/abdinoor12345/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/abdinoor-mohamed-3935b0229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:mohamedabdinoor701@gmail.com"
          className="hover:text-gray-400 transition"
        >
          Email
        </a>
      </div>
    </footer>
  );
}
