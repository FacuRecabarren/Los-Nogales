import React from 'react'

const FoodDrinks = () => {
  return (
    <div>
        <section className='bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708147247/Nogales/Papas_fritas-3_1_2_jkf0uo.png)] bg-cover bg-fixed flex justify-center items-center'>
            <div className='h-[25rem] flex flex-col justify-center items-center gap-10'>
                <h2 id='title' className="text-6xl font-bold relative inline-block pb-3 w-max text-white">
                BUENA COMIDA Y TRAGOS
                <span id='title' className="absolute bottom-2 left-0 w-full h-[1px] bg-white"></span>
                <span id='title' className="absolute bottom-0 left-0 w-full h-[6px] bg-white"></span> 
                </h2>
                <p className='text-center font-lora font-semibold text-white px-44 text-lg italic'>Visitanos y proba la mejor comida y cerveza artesanal de Mendoza</p>
            </div>
        </section>
    </div>
  )
}

export default FoodDrinks