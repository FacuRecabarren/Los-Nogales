import React from 'react'

const Services = () => {
  return (
    <div className='py-16 bg-[#F4F4F4] flex justify-center items-center gap-8 px-32'>
        <article className='flex justify-center items-start w-[22rem] gap-3'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708117034/Nogales/dj_2_n3gpup.png" alt="" className='w-12'/>
            <div className='flex flex-col justify-center items-start gap-2'>
                <h2 className='text-2xl font-bold text-[#252525]'>MÚSICA</h2>
                <p className='font-lora opacity-90'>Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.</p>
            </div>
        </article>
        <article className='flex justify-center items-start w-[22rem] gap-3'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708117000/Nogales/hamburguesa_wked8l.png" alt="" className='w-12'/>
            <div className='flex flex-col justify-center items-start gap-2'>
                <h2 className='text-2xl font-bold text-[#252525]'>COMIDA</h2>
                <p className='font-lora opacity-90'>Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.</p>
            </div>
        </article>
        <article className='flex justify-center items-start w-[22rem] gap-3'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708117036/Nogales/grifo-de-cerveza_wxltz5.png" alt="" className='w-12'/>
            <div className='flex flex-col justify-center items-start gap-2'>
                <h2 className='text-2xl font-bold text-[#252525]'>CERVEZA</h2>
                <p className='font-lora opacity-90'>Donec lacinia magna sit amet arcu aliquet luctus maecenas vehicula.</p>
            </div>
        </article>
    </div>
  )
}

export default Services