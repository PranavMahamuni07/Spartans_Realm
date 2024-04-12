import React from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Nutri = () => {
  return (
    <>
    <section className="text-gray-400 body-font dark">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
            <br />
            <br />
        <h1 className="text-5xl font-bold title-font text-white mb-1 ">
                
                <span className="text-amber-300 animate-fade-up animate-once animate-duration-1000 w-6 h-6 ">Nutritions</span>
                <span className="text-amber-300 animate-bounce w-6 h-6 "></span>
              </h1>
              <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-amber-300 inline-flex"></div>
              <br />
            </div>
        </div>
        <div className="flex flex-col items-center mt-10 mb-5">
          <h1 className="text-xl mb-2 text-white">Fuel your body like a Spartan, feast on nutritious foods for unstoppable strength</h1>

        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/4 dark">
            <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src="https://5.imimg.com/data5/XJ/WE/AP/SELLER-2968665/rolled-oats.jpg"
                width="720"
                height="400"
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-bold text-amber-300 uppercase mb-3">
                  Oats
                </h1>
                <p className="leading-relaxed mb-3">Calories: 150-200 kcal</p>
                <p className="leading-relaxed mb-3">A good source of fiber, oats also provide complex carbohydrates, protein, and various vitamins and minerals.</p>
                <div className="text-center">
                  
                </div>
              </div>
            </div>
          </div>

<div className="p-4 md:w-1/4 dark">
  <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src="https://www.unlockfood.ca/EatRightOntario/media/Website-images-resized/dark-leafy-greens.jpg"
      width="720"
      height="400"
      alt="blog"
    />
    <div className="p-6">
      <h1 className="title-font text-lg font-bold text-amber-300 uppercase mb-3">
        Leafy Greens
      </h1>
      <p className="leading-relaxed mb-3">Calories: 40-50 kcal</p>
      <p className="leading-relaxed mb-3">Spinach, kale, Swiss chard, and collard greens are rich in vitamins, minerals, and antioxidants.</p>

      <div className="text-center">
       
      </div>
    </div>
  </div>
</div>

<div className="p-4 md:w-1/4 dark">
  <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src="https://post.healthline.com/wp-content/uploads/2021/07/berries-1296x728-header.jpg"
      width="720"
      height="400"
      alt="blog"
    />
    <div className="p-6">
      <h1 className="title-font text-lg font-bold text-amber-300 uppercase mb-3">
        Berries
      </h1>
      <p className="leading-relaxed mb-3">Calories: 110-150 kcal</p>
      <p className="leading-relaxed mb-3">lueberries, strawberries, raspberries, and blackberries are packed with vitamins, fiber, and antioxidants.</p>

      <div className="text-center">
       
      </div>
    </div>
  </div>
</div>

{/* Repeat the above structure for the remaining items */}
{/* ... */}



<div className="p-4 md:w-1/4 dark">
  <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src="https://images.immediate.co.uk/production/volatile/sites/30/2022/07/Avocado-sliced-in-half-ca9d808.jpg?quality=90&resize=440,400"
      width="720"
      height="400"
      alt="blog"
    />
    <div className="p-6">
      <h1 className="title-font text-lg font-bold text-amber-300 uppercase mb-3">
        Avocados
      </h1>
      <p className="leading-relaxed mb-3">Calories: 40-50 kcal</p>
      <p className="leading-relaxed mb-3">Rich in healthy fats, avocados also contain fiber, potassium, vitamins E, K, and B-vitamins.</p>

      <div className="text-center">
       
      </div>
    </div>
  </div>
</div>

<div className="p-4 md:w-1/4 dark">
  <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src="https://northernnester.com/wp-content/uploads/2020/08/types-of-nuts.jpeg"
      width="720"
      height="400"
      alt="blog"
    />
    <div className="p-6">
      <h1 className="title-font text-lg font-bold text-amber-300 uppercase mb-3">
        Nuts & Seeds
      </h1>
      <p className="leading-relaxed mb-3">Calories: 110-150 kcal</p>
      <p className="leading-relaxed mb-3"> Almonds, walnuts, chia seeds, flaxseeds, and pumpkin seeds are excellent sources of healthy fats, protein, fiber, vitamins, and minerals.</p>

      <div className="text-center">
        
      </div>
    </div>
  </div>
</div>


<div className="p-4 md:w-1/4 dark">
  <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src="https://www.liveeatlearn.com/wp-content/uploads/2015/11/how-to-make-greek-yogurt-social.jpg"
      width="720"
      height="400"
      alt="blog"
    />
    <div className="p-6">
      <h1 className="title-font text-lg font-bold text-amber-300 uppercase mb-3">
        Yougert
      </h1>
      <p className="leading-relaxed mb-3">Calories: 40-50 kcal</p>
      <p className="leading-relaxed mb-3">A great source of protein, Greek yogurt also contains probiotics, calcium, and vitamins.</p>

      <div className="text-center">
       
      </div>
    </div>
  </div>
</div>

<div className="p-4 md:w-1/4 dark">
  <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src="https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/AN_images/health-benefits-of-broccoli-1296x728-feature.jpg?w=1155&h=1528"
      width="720"
      height="400"
      alt="blog"
    />
    <div className="p-6">
      <h1 className="title-font text-lg font-bold text-amber-300 uppercase mb-3">
          Broccoli
      </h1>
      <p className="leading-relaxed mb-3">Calories: 40-50 kcal</p>
      <p className="leading-relaxed mb-3">A cruciferous vegetable, broccoli is high in fiber, vitamins C and K, and contains various antioxidants.</p>

      <div className="text-center">
        
      </div>
    </div>
  </div>
</div>

<div className="p-4 md:w-1/4 dark">
  <div className="h-full border-2 border-gray-500 border-opacity-60 rounded-lg overflow-hidden shadow-xl">
    <img
      className="lg:h-48 md:h-36 w-full object-cover object-center"
      src="https://cdn.media.amplience.net/i/japancentre/recipe-1668-japanese-baked-sweet-potato/Japanese-baked-sweet-potato?$poi$&w=700&h=410&sm=c&fmt=auto"
      width="720"
      height="400"
      alt="blog"
    />
    <div className="p-6">
      <h1 className="title-font text-lg font-bold text-amber-300 uppercase mb-3">
        Sweet Potatoes
      </h1>
      <p className="leading-relaxed mb-3">Calories: 110-150 kcal</p>
      <p className="leading-relaxed mb-3">Packed with vitamins, especially vitamin A, as well as fiber and antioxidants, sweet potatoes are a nutritious carbohydrate option.</p>

      <div className="text-center">
       
      </div>
    </div>
  </div>
</div>

{/* Repeat the above structure for the remaining items */}
{/* ... */}




{/* Repeat the above structure for the remaining items */}
{/* ... */}



          {/* ... */}
        </div>
      </div>
    </section>
  </>
  )
}

export default Nutri;