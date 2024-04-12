import React from 'react';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gray-800 text-white body-font shadow-sm shadow-amber-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
        <a href="/" className="flex title-font font-medium items-center animate-fade-right text-white mb-4 md:mb-0 cursor-pointer" style={{ fontFamily: 'Ancient Roman Font, sans-serif' }}>
          <img src="https://i.pinimg.com/736x/3e/47/4a/3e474abdab2a7ba95d65386376538e37.jpg" alt="Spartans Logo" className="w-10 h-10 rounded-full" />
          <span className="ml-3 text-3xl font-bold text-red-600">Spartans Realm</span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-8 text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer animate-fade-down animate-once animate-duration-1000 ">Home</a>
          <a href="/GalleryM" className="mr-8 text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer animate-fade-down animate-once animate-duration-1000">Gallery</a>
          <a href="/FeaturesM" className="mr-8 text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer animate-fade-down animate-once animate-duration-1000">Features</a>
          <a href="/ContactM" className="mr-8 text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer animate-fade-down animate-once animate-duration-1000">Contact us !</a>

          
          
          {/* Register and Login buttons go here */}
        </nav>

        <a href='/signup'><button type="button" className="text-white animate-fade-left animate-once animate-duration-1000 hover:text-white border border-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"> Register Now ! </button></a>
        <a href='/login'><button type="button" className="text-white animate-fade-left animate-once animate-duration-1000 hover:text-white border border-white hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"> Login </button> </a>
      </div>
    </header>
  );
};

export default Header;
