 import React from "react";
 import ecommerce from "../assets/e-commerce.mp4";
 import clinical from "../assets/clinical.mp4";
 import hrms from "../assets/hrms.mp4";
 import research from "../assets/research.mp4";
 import movies from "../assets/movies.mp4";
 
 export default function Mywork() {
   return (
     <div className="px-4 py-10 max-w-6xl mx-auto">
       <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8">
         My Work
       </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
         {/* Project 1 */}
         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
           <h2 className="text-xl font-bold mb-3">E-commerce Website</h2>
           <video
             src={ecommerce}
             className="w-full h-40 object-cover mb-3 rounded"
             controls
           />
           <p className="text-gray-600">
             A fully functional e-commerce website with user authentication,
             product listings, and payment integration.
           </p>
         </div>
 
         {/* Project 2 */}
         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
           <h2 className="text-xl font-bold mb-3">Clinical Management System</h2>
           <video
             src={clinical}
             className="w-full h-40 object-cover mb-3 rounded"
             controls
           />
           <p className="text-gray-600">
             A system designed to manage patient records, appointments, and
             prescriptions for healthcare providers.
           </p>
         </div>
 
         {/* Project 3 */}
         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
           <h2 className="text-xl font-bold mb-3">HRMS System</h2>
           <video
             src={hrms}
             className="w-full h-40 object-cover mb-3 rounded"
             controls
           />
           <p className="text-gray-600">
             A Human Resource Management System for tracking employees, leave
             requests, payroll, and performance evaluations.
           </p>
         </div>
 
         {/* Project 4 */}
         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
           <h2 className="text-xl font-bold mb-3">Smart Agriculture Website</h2>
           <video
             src={research}
             className="w-full h-40 object-cover mb-3 rounded"
             controls
           />
           <p className="text-gray-600">
             A platform for farmers to get insights on soil health, weather
             forecasts, and automated irrigation control.
           </p>
         </div>
 
         {/* Project 5 */}
         <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
           <h2 className="text-xl font-bold mb-3">Batman Movies Website</h2>
           <video
             src={movies}
             className="w-full h-40 object-cover mb-3 rounded"
             controls
           />
           <p className="text-gray-600">
             A movie listing website dedicated to Batman movies, featuring
             trailers, reviews, and character profiles.
           </p>
         </div>
       </div>
     </div>
   );
 }
 