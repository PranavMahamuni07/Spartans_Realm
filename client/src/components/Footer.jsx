import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Explore</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="/home" className="text-white hover:text-gray-300">Home</a>
              </li>
              <li>
                <a href="/abotA" className="text-white hover:text-gray-300">About</a>
              </li>
              <li>
                <a href="/galleryM" className="text-white hover:text-gray-300">Gallery</a>
              </li>
              <li>
                <a href="/contactM" className="text-white hover:text-gray-300">Contact Us!</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Categories</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-white hover:text-gray-300">Fitness Programs</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">Nutrition</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">Equipment</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">Personal Training</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Connect</h2>
            <nav className="list-none mb-10">
              <li>
                <a href="#" className="text-white hover:text-gray-300">Facebook</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">Instagram</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">Twitter</a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300">LinkedIn</a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">Subscribe</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label htmlFor="footer-field" className="leading-7 text-sm text-white">Subscribe for Updates</label>
                <input type="text" id="footer-field" name="footer-field" className="w-full bg-gray-800 rounded border bg-opacity-40 border-gray-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded">Subscribe</button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">Stay updated with our latest offers and fitness tips</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 bg-opacity-75">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
          <img src="https://i.pinimg.com/736x/3e/47/4a/3e474abdab2a7ba95d65386376538e37.jpg" alt="Spartans Logo" className="w-10 h-10 rounded-full" />
            <span className="ml-3 font-bold text-xl">Spartans Realm</span>
          </a>
          <p className="text-sm text-gray-400 sm:ml-6 sm:mt-0 mt-4">© 2024 Fitness Hub — <a href="https://www.fitnesshub.com" className="text-white ml-1" target="_blank" rel="noopener noreferrer">www.fitnesshub.com</a></p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
  
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
