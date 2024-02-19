import React from 'react'
import { useTranslation } from 'react-i18next';

const About = () => {

  const { t } = useTranslation()

  return (
    <div id='about' className='flex flex-col lg:flex-row lg:flex justify-center items-center gap-16 lg:px-32 py-20'>
        <section className='lg:w-1/2 w-full flex flex-col justify-center items-center lg:items-start gap-10'>
        <h2 className="text-4xl lg:text-6xl font-bold relative inline-block pb-3 w-max text-[#252525]">
        {t('about')}
        <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#252525]"></span>
        <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#252525]"></span> 
        </h2>
            <h3 className='font-lora text-2xl text-[#252525] italic text-center lg:text-start px-5 lg:px-0'>{t('aboutDescription')}</h3>
            <p className='text-[#252525] font-lora text-center lg:text-start px-5 lg:px-0'>{t('aboutDescription2')}</p>
        </section>
        <section className='lg:w-1/2 w-full px-8 lg:px-0'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708120678/Nogales/Group_2_2_nmaiow.png" alt="" />
        </section>
    </div>
  )
}

export default About