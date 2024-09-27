import React from "react";
import contactImage from "../Images/contactImage.jpg";

function Contact() {
  return (
    <div className="container mx-auto p-4 md:p-6 lg:p-12">
      <div className="flex flex-wrap justify-center">
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 md:p-6 lg:p-12">
          <div
            className="bg-cover bg-center h-48 md:h-64 lg:h-80 xl:h-96"
            style={{ backgroundImage: `url(${contactImage})` }}
          >
            {/* Image */}
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/3 xl:w-3/4 p-4 md:p-6 lg:p-12">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <form action="#">
            <div className="grid grid-cols-1 pt-5">
              <input
                name="Name"
                type="text"
                placeholder="Enter your name"
                className="border border-gray-400 py-2 pl-4"
              />
            </div>
            <div className="grid grid-cols-1 pt-5">
              <input
                name="Email"
                type="text"
                placeholder="Enter your email"
                className="border border-gray-400 pl-4 py-2"
              />
            </div>
            <div className="grid grid-cols-1 pt-5">
              <textarea
                name="Message"
                placeholder="Message"
                className="border border-gray-400 pl-4 py-2"
              />
            </div>
            <div className="mt-5">
              <button className="w-full bg-black text-white py-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;