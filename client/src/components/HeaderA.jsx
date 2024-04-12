import { Menu, Transition } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import { Fragment } from 'react';
import { ChevronDownIcon, UserIcon } from '@heroicons/react/20/solid';
import Nutrition from './Nutrition' 

const HeaderA = () => {
  const navigate = useNavigate(); // Use useNavigate to get the navigate function

  const handleLogout = () => {
    axios.get('http://localhost:3000/auth/logout')
    .then(res => {
      if(res.data.status) {
        navigate('/');
      }
    }).catch(err => {
      console.log(err);
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 bg-gray-800 text-white body-font shadow-sm shadow-amber-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center shadow-lg">
        <a href="/homeA" className="flex title-font font-medium items-center animate-fade-right text-white mb-4 md:mb-0 cursor-pointer" style={{ fontFamily: 'Ancient Roman Font, sans-serif' }}>
          <img src="https://i.pinimg.com/736x/3e/47/4a/3e474abdab2a7ba95d65386376538e37.jpg" alt="Spartans Logo" className="w-10 h-10 rounded-full" />
          <span className="ml-3 text-3xl font-bold text-red-600">Spartans Realm</span>
        </a>

        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* Navigation Links */}
          <a href="/homeA" className="mr-8 text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer animate-fade-down animate-once animate-duration-1000 ">Home</a>
          <a href="/FeaturesA" className="mr-8 text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer animate-fade-down animate-once animate-duration-1000">Features</a>
          <a href="/aboutA" className="mr-8 text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer animate-fade-down animate-once animate-duration-1000">About</a>
          <a href="/nutriA" className="mr-8 text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer animate-fade-down animate-once animate-duration-1000">Nutritions</a>
          
          {/* Socials Dropdown */}
          <div className="relative inline-block text-left">
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="flex items-center text-gray-300 hover:text-red-500 transition duration-300 font-bold text-2xl cursor-pointer">
                    <span className="mr-2 animate-fade-down animate-once animate-duration-1000">Socials</span>
                    <ChevronDownIcon className="h-5 w-5 text-violet-200 hover:text-violet-100 animate-fade-down animate-once animate-duration-1000" aria-hidden="true" />
                  </Menu.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-left divide-y divide-gray-700 rounded-md bg-gray-800 shadow-lg ring-1 ring-gray-600 focus:outline-none">
                      <Menu.Item>
                        <a href="/nutritionA" className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:text-white">
                          <span className="mr-2 h-5 w-5"></span> Nutritions Guide
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/peerA" className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:text-white">
                          <span className="mr-2 h-5 w-5"></span> Peer Pressure
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/socialA" className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:text-white">
                          <span className="mr-2 h-5 w-5"></span> Social Support
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a href="/cardioA" className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:text-white">
                          <span className="mr-2 h-5 w-5"></span> Cardiovascular Exercise
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </>
              )}
            </Menu>
          </div>
        </nav>

        {/* User Icon with Dropdown */}
        <div className="relative inline-block text-left ml-auto">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="flex items-center  rounded-full bg-white text-black hover:text-red-500 transition duration-300 font-bold text-3xl cursor-pointer">
                  <UserIcon className="h-10 w-10" /> {/* Adjusted icon size */}
                </Menu.Button>
                <Transition
                  show={open}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-700 rounded-md bg-gray-800 shadow-lg ring-1 ring-gray-600 focus:outline-none">
                    <Menu.Item>
                      <a href="/profile" className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:text-white">
                        Profile
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <button className="group flex w-full items-center rounded-md px-2 py-2 text-sm text-gray-300 hover:text-white" onClick={handleLogout}>Logout</button>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default HeaderA;
