import React from 'react';

const Features = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1> . </h1>
      <h1> . </h1>
      <h1>  </h1>
      <br />
      <br />

      <section className="text-white body-font relative bg-cover bg-center bg-fixed hover:shadow-xl shadow-white " style={{ backgroundImage: 'url("https://athleticedgenc.com/wp-content/uploads/2020/05/background-gym.jpg")' }}>
        <br/>
      <h1 className='text-5xl font-bold title-font mb-2 text-center text-amber-300'>Features</h1>
      <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-amber-300 inline-flex"></div>
              <br />
            </div>
      <div className="container px-5 py-24 mx-auto">
        {/* Fitness Feature 1: Strength Training */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-right animate-once animate-duration-1000">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0 border border-red-500">
            <img className="w-full h-full rounded-full object-cover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxjyEGYma3UmQM4yfd7LZVhbvjcQ3cU0IiQ&usqp=CAU" alt="Strength Training" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 ">
            <h2 className="text-amber-300 font-bold text-xl title-font mb-2">Strength Training</h2>
            <p className="leading-relaxed text-base text-white">Build muscle, increase power, and enhance your overall strength with our comprehensive strength training programs.</p>
            <a href='/strength'  class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
          </div>
        </div>

        {/* Fitness Feature 2: Cardiovascular Exercise */}
        <div className="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col animate-fade-left animate-once animate-duration-1000">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-amber-300 text-xl title-font font-bold mb-2">Cardiovascular Exercise</h2>
            <p className="leading-relaxed text-base text-white">Improve your cardiovascular health, burn calories, and boost endurance through our dynamic cardiovascular exercise routines.</p>
            <a href='/cardio' class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0 border border-red-500">
            <img className="w-full h-full rounded-full object-cover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" src="https://www.shutterstock.com/image-photo/short-distance-running-male-professional-600nw-2045024738.jpg" alt="Cardiovascular Exercise" />
          </div>
        </div>

        {/* Fitness Feature 3: Nutritional Guidance */}
        <div className="flex items-center lg:w-3/5 mx-auto sm:flex-row flex-col animate-fade-right animate-once animate-duration-1000">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-red-100 text-red-500 flex-shrink-0 border border-red-500">
            <img className="w-full h-full rounded-full object-cover transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300" src="https://www.proformfitness.co.uk/blog/wp-content/uploads/health-nutrition-fitness-workout-lifestyle.jpg" alt="Nutritional Guidance" />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-amber-300 text-xl title-font font-bold mb-2">Nutritional Guidance</h2>
            <p className="leading-relaxed text-base text-white">Fuel your body with the right nutrients. Our nutrition experts provide personalized guidance to optimize your fitness journey.</p>
            <a href='/nutritions' class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
          </div>
        </div>

       <a href='/signup'><button className="flex mx-auto mt-20 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Get Started</button> </a> 
      </div>
    </section>
    </section>
  );
}

export default Features;
