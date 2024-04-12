import React from 'react';

const Gallery = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>

    <section className="text-white body-font relative bg-cover bg-center bg-fixed hover:shadow-xl shadow-white " style={{ backgroundImage: 'url("https://athleticedgenc.com/wp-content/uploads/2020/05/background-gym.jpg")' }}>
    <br/>
    <br />

      <h1 className='text-5xl font-bold title-font mb-0.5 text-center text-amber-300'>Gallery</h1>
      <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-amber-300 inline-flex"></div>

            </div>
       {/* Reduced mb value */}
      <section className="text-gray-600 body-font">
        <style>
          {`
            .gallery-img {
              transition: box-shadow 0.3s ease;
            }

            .gallery-img:hover {
              box-shadow: 0 4px 8px rgba(255, 0, 0, 0.5);
            }
          `}
        </style>
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-10 flex-wrap">
            <h1 className="text-5xl title-font font-bold text-red-600 lg:w-1/3 lg:mb-0 mb-2">
  
              Train Like a Spartan
            </h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">

              "Experience seamless convenience with our centralized printing hub, offering a comprehensive range of printing services all under one roof. From vibrant posters to professional documents, find all your printing needs fulfilled with us."
            </p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg drop-shadow-xl border border-white gallery-img " src="https://web-back.perfectgym.com/sites/default/files/styles/460x/public/equipment%20%286%29.jpg?itok=bC0T32-K" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-lg drop-shadow-xl border border-white gallery-img" src="https://img.freepik.com/free-photo/young-fitness-man-studio_7502-5008.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704240000&semt=sph" />
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-md drop-shadow-xl border border-white gallery-img" src="https://i.pinimg.com/736x/f2/15/08/f215084b1a710abcfaeff27d04c9f797.jpg" />
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl drop-shadow-xl border border-white gallery-img" src="https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-tl-2xl drop-shadow-xl border border-white gallery-img" src="https://www.shutterstock.com/image-photo/handsome-man-big-muscles-posing-600nw-507146491.jpg" />
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full h-full object-cover object-center block rounded-br-3xl drop-shadow-xl border border-white gallery-img" src="https://www.shutterstock.com/image-photo/handsome-man-big-muscles-posing-600nw-632420900.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      </section>
    </>
  );
}

export default Gallery;
