import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import foodie2 from'../../../public/foodie2.jpeg'



const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
      
         src={foodie2}
         height={600}
         width={600}
         
        />
      
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
       More About Food Foodie
        <br className="hidden lg:inline-block"/>
        
      </h1>
      <p className="mb-5 leading-relaxed">
      Indulge in the finest flavors at our restaurant, where every dish is crafted with care and the highest quality ingredients. We believe in serving not just food, but an unforgettable experience that delights the senses. From vibrant appetizers to hearty main courses and decadent desserts, each bite is a taste of culinary excellence. Join us for a meal that sets the standard for delicious dining.
      </p>
      <p>
      At our restaurant, we take pride in crafting each dish with the freshest ingredients, authentic flavors, and a touch of culinary passion. Our menu brings together traditional recipes and innovative twists, aiming to deliver a memorable dining experience with every bite. From appetizers to desserts, we invite you to explore a world of taste that celebrates quality, flavor, and the joy of sharing a delicious meal.
      </p>
      <div className="flex justify-center">
        <Link href={"/foodfoodie.jpg"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          click for menu
        </button>
        </Link>
       
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About
