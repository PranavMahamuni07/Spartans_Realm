import React from 'react';

const Nutrition = () => {
  return (
    <section className="text-gray-600 bg-fixed body-font" style={{ backgroundImage: 'url("https://img.freepik.com/premium-photo/colorful-various-herbs-spices-cooking-dark-background_370312-476.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=ais")', backgroundSize: 'cover' }}>
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
        <div className="text-center mb-2">
              <h1 className="text-5xl font-bold title-font text-white mb-1 ">
                
                <span className="text-amber-300 animate-fade-up animate-once animate-duration-1000 w-6 h-6 ">Nutritions</span>
                <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-amber-300 inline-flex"></div>
              <br />
            </div>
                <span className="text-amber-300 animate-bounce w-6 h-6 "></span>
              </h1>
              <p className=" leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-white"></p>
              <div className="flex mt-6 justify-center">
                <div className="w-16 h-1 rounded-full bg-amber-300 inline-flex"></div>
                <br />
              </div>
            </div>          <p className="text-white animate-fade-down animate-once animate-duration-1000 animate-delay-[250ms] leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto mb-4">
            Nutrition is a critical aspect of maintaining optimal health and well-being, providing the body with essential substances necessary for growth, development, and overall function. There are several key categories of nutrients that play crucial roles in supporting various bodily functions, including carbohydrates, proteins, fats, vitamins, and minerals.
          </p>
          <p className="text-white leading-relaxed xl:w-2/4 animate-fade-down animate-once animate-duration-1000 animate-delay-[500ms] lg:w-3/4 mx-auto mb-4">
            Carbohydrates are a primary source of energy for the body, supplying glucose that fuels cells and supports brain function. They can be classified into simple carbohydrates, found in sugars, and complex carbohydrates, present in foods like whole grains, fruits, and vegetables. Proteins, composed of amino acids, are vital for tissue repair, immune system function, and the synthesis of enzymes and hormones. Sources of protein include meat, dairy products, legumes, and nuts.
          </p>

        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-amber-100 rounded flex p-4 h-full animate-fade-right animate-once animate-duration-1000 animate-delay-[250ms] items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font  font-medium">Vitamins and Minerals</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-amber-100 rounded flex p-4 animate-fade-left animate-once animate-duration-1000 animate-delay-[500ms] h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Protein Sources</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-amber-100 rounded flex p-4 animate-fade-right animate-once animate-duration-1000 animate-delay-[550ms] h-full items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Fiber-Rich Foods</span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-amber-100 rounded flex p-4 h-full animate-fade-left animate-once animate-duration-1000 animate-delay-[1000ms] items-center">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-red-500 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                <path d="M22 4L12 14.01l-3-3"></path>
              </svg>
              <span className="title-font font-medium">Fiber-Rich Foods</span>
            </div>
          </div>
        </div>
       
      </div>
    </section>
  );
};

export default Nutrition;
