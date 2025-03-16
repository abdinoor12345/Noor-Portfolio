import React from "react";

const services = [
  {
    title: "Web Development",
    description:
      "We offer custom web development services tailored to your business needs. Our team utilizes the latest technologies to create responsive and user-friendly websites.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Our social media marketing services help businesses reach their target audience and engage with them effectively. We develop strategies to increase brand awareness, drive traffic, and generate leads on various social media platforms.",
  },
  {
    title: "App Development",
    description:
      "Turn your ideas into reality with our app development services. Whether you need a mobile app for iOS or Android, we have the expertise to design, develop, and deploy high-quality apps that meet your specifications.",
  },
  {
    title: "Graphic Design",
    description:
      "Our graphic design services encompass a wide range of visual communication techniques. From logo design to branding and illustration, we create captivating designs that resonate with your audience.",
  },
  {
    title: "Content Writing",
    description:
      "Engage your audience with compelling content tailored to your brand voice and target audience. Our content writing services cover blog posts, articles, website content, and more, designed to drive traffic and conversions.",
  },
  {
    title: "Digital Marketing",
    description:
      "Maximize your online presence with our comprehensive digital marketing services. We implement SEO, PPC, email marketing, and other strategies to drive growth and improve conversions.",
  },
];

export default function Services() {
  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-semibold text-center mb-8">My Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <h2 className="text-xl font-bold mb-3">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
