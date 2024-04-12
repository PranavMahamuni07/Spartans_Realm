import React from 'react';

const Contact = () => {
  const puneCoordinates = {
    latitude: 18.5204,
    longitude: 73.8567
  };

  return (
    <section className="text-white body-font relative" style={{ zIndex: 1 }}>
      <div className="absolute inset-0 bg-gray-800">
        <iframe
          title="map"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src={`https://maps.google.com/maps?width=100%&height=600&hl=en&q=${encodeURIComponent('Pune')}&ie=UTF8&t=&z=14&iwloc=B&output=embed`}
          style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
        ></iframe>
      </div>
      <div className="container px-5 py-24 mx-auto flex">
        <div className="lg:w-1/3 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-white mb-1 text-5xl font-bold title-font">Contact us!</h2>
          
          <p className="leading-relaxed mb-5 text-gray-300">know more</p>
          <div className="relative mb-4">

            <label htmlFor="email" className="leading-7 text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-700 rounded border border-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          {/* <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-700 rounded border border-gray-500 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div> */}
          <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
          <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
