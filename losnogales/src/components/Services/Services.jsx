import React from 'react'
import { useTranslation } from 'react-i18next';

const Services = () => {

    const { t } = useTranslation()

  return (
    <div className='py-16 bg-[#F4F4F4] flex flex-col lg:flex lg:flex-row justify-center items-center gap-8 px-32'>
        <article className='flex justify-center items-start w-[22rem] gap-5'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708117034/Nogales/dj_2_n3gpup.png" alt="" className='w-12'/>
            <div className='flex flex-col justify-center items-start gap-1'>
                <h2 className='text-2xl font-bold text-[#252525]'>{t('music')}</h2>
                <p className='font-lora opacity-90'>{t('musicDescription')}</p>
            </div>
        </article>
        <article className='flex justify-center items-start w-[22rem] gap-5'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708117000/Nogales/hamburguesa_wked8l.png" alt="" className='w-12'/>
            <div className='flex flex-col justify-start items-start gap-1'>
                <h2 className='text-2xl font-bold text-[#252525]'>{t('food')}</h2>
                <p className='font-lora opacity-90'>{t('foodDescription')}</p>
            </div>
        </article>
        <article className='flex justify-start items-start w-[22rem] gap-5'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708117036/Nogales/grifo-de-cerveza_wxltz5.png" alt="" className='w-12'/>
            <div className='flex flex-col justify-center items-start gap-1'>
                <h2 className='text-2xl font-bold text-[#252525]'>{t('beer')}</h2>
                <p className='font-lora opacity-90'>{t('beerDescription')}</p>
            </div>
        </article>
    </div>
  )
}

export default Services