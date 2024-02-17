import React from 'react'

const Hours = () => {
  return (
    <div>
        <section className='bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708144679/Nogales/Prueba-12_1_wbivip.png)] bg-cover bg-fixed flex justify-center items-center'>
            <div className='h-[25rem] flex flex-col justify-center items-center gap-10'>
                <h2 id='title' className="text-6xl font-bold relative inline-block pb-3 w-max text-white">
                HORARIOS
                <span id='title' className="absolute bottom-2 left-0 w-full h-[1px] bg-white"></span>
                <span id='title' className="absolute bottom-0 left-0 w-full h-[6px] bg-white"></span> 
                </h2>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <p className='text-center font-lora font-semibold text-white px-44 text-lg'>Lunes - Viernes / 20hs - 00hs</p>
                    <p className='text-center font-lora font-semibold text-white px-44 text-lg'>Sábados - Domingos / 20hs - 03hs</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hours