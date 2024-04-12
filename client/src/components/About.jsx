import React from 'react';

const About = () => {
  return (
    <section className="text-gray-100 body-font bg-gray-900">
        <br />
        <br />
        <br />

      <h1 className='pt-6'> </h1>
      <h1 className='text-5xl font-bold title-font mb-2 text-center pt-3 text-amber-300'>Read some Blogs About us !</h1>
      <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-amber-300 inline-flex"></div>
              <br />
            </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -my-8">

          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-600">Jul</span>
                <span className="font-medium text-lg text-gray-300 title-font leading-none">18</span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-red-600 mb-1">Fitness Tips</h2>
                <h1 className="title-font text-xl font-medium text-amber-300 mb-3">The Ultimate Guide to Building Muscle</h1>
                <p className="leading-relaxed mb-5">Discover the best tips and techniques for building muscle and achieving your fitness goals.</p>
                <a className="inline-flex items-center">
                  <img alt="blog" src="https://funmauj.b-cdn.net/test/609875.jpg" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center shadow-2xl shadow-purple-800" />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-100">Vegeta</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-600">Jul</span>
                <span className="font-medium text-lg text-gray-300 title-font leading-none">18</span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-red-600 mb-1">Nutrition</h2>
                <h1 className="title-font text-xl font-medium text-amber-300 mb-3">Fueling Your Workouts: A Nutrition Guide</h1>
                <p className="leading-relaxed mb-5">Explore the importance of nutrition and discover the best foods to fuel your workouts and boost your performance.</p>
                <a className="inline-flex items-center">
                  <img alt="blog" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdCHdkZRph-p6pOUI5t4w3x7Jfto8KzqoWZw&usqp=CAU" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center shadow-2xl shadow-purple-800" />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-100">Goku</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="py-8 px-4 lg:w-1/3">
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-600">Jul</span>
                <span className="font-medium text-lg text-gray-300 title-font leading-none">18</span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-red-600 mb-1">Workout Routines</h2>
                <h1 className="title-font text-xl font-medium text-amber-300 mb-3">Effective Full-Body Workouts for Beginners</h1>
                <p className="leading-relaxed mb-5">Get started on your fitness journey with these beginner-friendly full-body workout routines.</p>
                <a className="inline-flex items-center">
                  <img alt="blog" src="https://c4.wallpaperflare.com/wallpaper/730/309/132/anime-naruto-lightning-madara-uchiha-wallpaper-preview.jpg" className="w-16 h-16 rounded-full flex-shrink-0 object-cover object-center shadow-2xl shadow-purple-800" />
                  <span className="flex-grow flex flex-col pl-3">
                    <span className="title-font font-medium text-gray-100">Obito Uchiha</span>
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Add more blog sections as needed */}
          
        </div>
      </div>
    </section>
  );
};

export default About;