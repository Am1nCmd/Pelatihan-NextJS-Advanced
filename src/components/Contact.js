import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6">
            {[
              { label: "Name", type: "text" },
              { label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-white mb-2 font-medium">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                  placeholder={`Your ${field.label.toLowerCase()}`}
                />
              </div>
            ))}
            <div>
              <label className="block text-white mb-2 font-medium">
                Message
              </label>
              <textarea
                className="w-full p-3 border border-gray-600 rounded-lg bg-gray-700 text-white focus:border-red-500 focus:ring-2 focus:ring-red-500 transition-all duration-300"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/50"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
