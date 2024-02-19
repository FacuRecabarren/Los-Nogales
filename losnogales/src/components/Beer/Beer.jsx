import React from 'react'
import { useTranslation } from 'react-i18next';

const Beer = () => {

  const { t } = useTranslation()

  return (
    <div className='flex flex-col lg:flex-row lg:flex justify-center items-center lg:px-32 py-20 gap-10 lg:gap-16'>
        <section className='w-1/2 hidden lg:flex'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708369768/Group_2_5_d4lcqd.png" alt="" className=''/>
        </section>
        <section className='lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-end gap-10'>
        <h2 className="text-4xl lg:text-6xl font-bold relative inline-block pb-3 w-max text-[#252525]">
        {t('ourBeer')}
        <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#252525]"></span>
        <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#252525]"></span> 
        </h2>
            <h3 className='font-lora text-2xl text-[#252525] italic text-center lg:text-start px-5 lg:px-0'>{t('ourBeerDesc')}</h3>
            <p className='text-[#252525] font-lora text-center lg:text-end px-5 lg:px-0'>{t('ourBeerDesc2')}</p>
            <p className='text-[#252525] font-lora text-center lg:text-end px-5 lg:px-0'>{t('ourBeerDesc3')}</p>
        </section>
        <section className='px-10 lg:hidden'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708369768/Group_2_5_d4lcqd.png" alt=""/>
        </section>
    </div>
  )
}

export default Beer