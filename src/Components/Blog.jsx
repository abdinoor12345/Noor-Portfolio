import React from "react";

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Blog</h1>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">
        Welcome to my blog! Here, I share insights, tutorials, and experiences.
      </p>

      {/* Blog List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        {/* Sample Blog Post 1 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-bold mb-2">Building a Portfolio with React</h2>
          <p className="text-gray-600">
            Learn how to create a stunning portfolio using React and Tailwind CSS.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">
            Read More →
          </a>
        </div>

        {/* Sample Blog Post 2 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-bold mb-2">Getting Started with Django</h2>
          <p className="text-gray-600">
            A beginner-friendly guide to setting up and running Django projects locally.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">
            Read More →
          </a>
        </div>

        {/* Sample Blog Post 3 */}
        <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
          <h2 className="text-xl font-bold mb-2">Vue.js vs React: Which One to Choose?</h2>
          <p className="text-gray-600">
            Comparing Vue.js and React for web development—pros, cons, and use cases.
          </p>
          <a href="#" className="text-blue-500 hover:underline mt-2 inline-block">
            Read More →
          </a>
        </div>
      </div>
    </div>
  );
}
