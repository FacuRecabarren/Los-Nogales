import React from 'react'

const About = () => {
  return (
    <div className='flex justify-center items-center gap-16 px-32 py-20'>
        <section className='w-1/2 flex flex-col gap-10'>
        <h2 className="text-6xl font-bold relative inline-block pb-3 w-max text-[#252525]">
        NOSOTROS
        <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#252525]"></span>
        <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#252525]"></span> 
        </h2>
            <h3 className='font-lora text-2xl text-[#252525] italic'>Welcome to Dina, a modern restaurant with a focus on premium food tastes</h3>
            <p className='text-[#252525] font-lora'>We invite you to celebrate our restaurant's delicious recipes whether you are here for a business lunch or dinner. Discover new tastes and inspired recipes from all over the world.</p>
        </section>
        <section className='w-1/2'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708120678/Nogales/Group_2_2_nmaiow.png" alt="" />
        </section>
    </div>
  )
}

export default About