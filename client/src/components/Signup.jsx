import React, { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3000/auth/signup", {
      username,
      email,
      password,
    })
      .then((response) => {
        if (response.data.status) {
          navigate('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    
    
    <section className="text-gray-400 bg-gray-900 body-font h-screen bg-fixed flex items-center justify-center">
      
      <div className="sign-up-container container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-3">
          <h1 className="sm:text-4xl text-4xl title-font mb-1 text-amber-300 font-extrabold animate-fade-down animate-once animate-duration-1000">
            Register Now !
          </h1>
          <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-amber-300 inline-flex"></div>
              <br />
            </div>
          <br></br>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-white text-xl animate-fade-down animate-once animate-duration-1000 animate-delay-500">
            Unleash Your Ultimate Strength: Navigate the World of Body Building and Supplements with Our Interactive Guide – Power Up Your Fitness Journey Now!
          </p>
        </div>
        <form className="sign-up-form lg:w-2/5 md:w-1/2 bg-gray-800 bg-opacity-50 rounded-lg p-4 flex flex-col md:ml-auto md:mr-auto w-full mt-10 md:mt-0 ring-2 ring-amber-300" onSubmit={handleSubmit}>
          <h2 className="text-white text-xl title-font mb-5 font-bold">Sign Up</h2>

          <div className="relative mb-4">
            <label htmlFor="username" className="leading-7 text-sm text-white">Username:</label>
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              className="ring-2 ring-amber-300 w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-500 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">Email:</label>
            <input
              type="email"
              autoComplete="off"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              className="ring-2 ring-amber-300 w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-500 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label htmlFor="password" className="leading-7 text-sm text-white">Password:</label>
            <input
              type="password"
              placeholder="******"
              onChange={(e) => setPassword(e.target.value)}
              className="ring-2 ring-amber-300 w-full bg-gray-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-red-500 rounded border border-gray-600 focus:border-red-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button type="submit" className="text-black font-serif rounded-lg transition ease-in-out delay-150 bg-amber-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300 text-3xl">
            Sign Up
          </button>

          <p className="text-lg mt-3 text-red-500 hover:text-white">
            Have an Account? <Link to="/login" className="text-amber-300">Login</Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
