import React from 'react'

const Main = () => {
  return (
    <div className='bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708115317/Nogales/amie-johnsondasa-VJXLzQi5TlE-unsplash_1_plzo8h.jpg)] bg-cover bg-left h-screen bg-fixed flex flex-col justify-center items-center gap-20'>
        <div className='flex flex-col justify-center items-center gap-8'>
            <h1 className='text-8xl font-bold tracking-wider text-white m-0'>¡BIENVENIDOS!</h1>
            <p className='text-center text-white font-lora text-xl'>Conocé el mejor bar de Mendoza</p>
        </div>
        <button className='border-4 py-3 px-6 text-xl text-white font-bold hover:bg-[#26170A] duration-500'>RESERVAR</button>
    </div>
  )
}

export default Main