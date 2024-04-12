import React from 'react'
import Signup from './Signup'

const HeroA = () => {
  return (
    <div className="text-center mb-10">
            
    <br />
    <br></br>
    <br></br>
    
    <section className="text-white body-font relative bg-cover bg-center bg-fixed hover:shadow-xl shadow-white " style={{ backgroundImage: 'url("https://athleticedgenc.com/wp-content/uploads/2020/05/background-gym.jpg")' }}>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="absolute top-0 inset-x-0 mx-auto flex flex-col items-center text-center w-full p-8">
          <br />
          <div className="text-center mb-2 animate-fade-down animate-once">
            <h1 className="text-5xl font-bold title-font  text-white mb-2 ">
              
              <span className="text-amber-300 animate-bounce w-6 h-6 ">Spartans </span>
              <span className="text-amber-300 animate-bounce w-6 h-6 ">Realm</span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white"></p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-amber-300 inline-flex"></div>
              <br />
            </div>
          </div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white space-y-4">
          <div className="mb-4">
            <h1 className="title-font sm:text-4xl text-3xl animate-fade-right animate-once animate-duration-1000 font-bold"><span className="text-amber-300 ">Welcome to Spartans Realm</span></h1>
          </div>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium animate-fade-right animate-duration-1000 animate-delay-500">Your Ultimate Fitness Journey</h1>
          <p className="mb-8 leading-relaxed animate-fade-right animate-duration-1000 animate-delay-500">
            Transform your body, mind, and soul with our state-of-the-art gym and fitness programs. Join Spartans Realm and embrace a healthier, stronger, and happier you.
          </p>
          <div className="flex justify-center space-x-4">
          <a href='/featureA'><button className="inline-flex animate-fade-up animate-once animate-duration-1000 animate-delay-[250ms] text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Learn More</button> </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full pr-4 md:w-1/2 w-5/6">
          <div className="border-2  border-amber-300 hover:glow-red animate-fade-up animate-once inline-block overflow-hidden rounded-full shadow-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300">
            <img
              className="object-cover object-center  w-full h-full rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
              alt="hero"
              src="https://www.shutterstock.com/image-photo/silhouette-strong-bodybuilder-confident-young-600nw-278055668.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default HeroA