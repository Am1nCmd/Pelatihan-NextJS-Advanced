import React from "react";

function Services() {
  const services = [
    {
      title: "Digital Solutions",
      description: "Custom digital solutions tailored to your business needs",
      icon: "🚀",
    },
    {
      title: "Web Development",
      description: "Modern and responsive web applications development",
      icon: "💻",
    },
    {
      title: "Digital Transformation",
      description: "Expert guidance in digital transformation journey",
      icon: "⚡",
    },
  ];

  return (
    <div
      id="services"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-red-500/20 transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-red-500"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
