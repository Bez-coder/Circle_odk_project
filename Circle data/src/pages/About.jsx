import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* About Section */}
      <section className="bg-[#203e7c] text-white w-full py-16">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              About Us
            </h1>
            {/* Space for your About Us description */}
            <div className="text-lg">
              {
              <h2>Circle Research Services is a visionary company founded by highly experienced professionals from prestigious institutions such as Harvard University. We specialize in providing research, monitoring, and evaluation services, with a strong commitment to empowering organizations to make a meaningful impact in global health and development. At Circle, we strive to be more than just a service provider—we aim to be a collaborative partner, dedicated to contributing to the betterment of disadvantaged populations around the world by becoming a trusted and reliable research partner for development organizations.
              </h2>}
            </div>
            <Link
              to="/contactus"
              className="inline-block bg-white text-[#203e7c] font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition duration-300"
            >
              Contact Us
            </Link>
          </div>
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <div className="bg-gray-300 h-64 w-full md:w-96 rounded-lg"></div> {/* Placeholder for image */}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Vision
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            To become the most reliable and trusted provider of research, monitoring, and evaluation services. We strive to be an essential partner for organizations dedicated to making a meaningful impact in global health and development worldwide.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            To contribute to the betterment of disadvantaged populations globally by providing high-quality research, M&E services and innovative solutions that enable organizations to make informed decisions, improve program effectiveness, and maximize their impact on global health and development. 
We are committed to achieving this by fostering a culture of excellence, embracing innovative approaches, and prioritizing the unique needs of each client.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Jane Doe</h3>
              <p className="text-gray-600">Founder & CEO</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">John Smith</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="bg-gray-200 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Alice Johnson</h3>
              <p className="text-gray-600">Lead Developer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
