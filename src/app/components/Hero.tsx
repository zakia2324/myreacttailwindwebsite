import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import food from '../../../public/food.jpeg';
 
const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font bg-gray-100">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        Hello! Welcome To Food 
        <br className="hidden lg:inline-block" />
        Foodie
      </h1>
      <p className="mb-8 leading-relaxed">
      At our restaurant, we take pride in crafting each dish with the freshest ingredients, authentic flavors, and a touch of culinary passion. Our menu brings together traditional recipes and innovative twists, aiming to deliver a memorable dining experience with every bite. From appetizers to desserts, we invite you to explore a world of taste that celebrates quality, flavor, and the joy of sharing a delicious meal.
      </p>
      <div className="flex justify-center">
        <Link href={"#contact"}>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        </Link>
       
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <Image
        className="object-cover object-center rounded border 5px solid "
        alt="girlpic"
        width={300}
        height={300}
        src= {food} />
    </div>
  </div>
</section>

  
    </div>
  )
}

export default Hero



      
    

