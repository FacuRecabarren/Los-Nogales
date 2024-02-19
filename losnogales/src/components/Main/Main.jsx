import React from 'react'
import { useTranslation } from 'react-i18next';

const Main = () => {

  const { t } = useTranslation()

  return (
    <div id='home' className='bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708115317/Nogales/amie-johnsondasa-VJXLzQi5TlE-unsplash_1_plzo8h.jpg)] bg-cover lg:bg-left h-screen lg:bg-fixed flex flex-col justify-center items-center gap-20 bg-center'>
        <div className='flex flex-col justify-center items-center gap-8'>
            <h1 className='text-5xl lg:text-8xl font-bold tracking-wider text-white m-0'>{t('welcome')}</h1>
            <p className='text-center text-white font-lora text-xl'>{t('welcomeDescription')}</p>
        </div>
        <a href='#contact' className='border-4 py-3 px-10 lg:px-6 text-xl text-white font-bold hover:bg-[#26170A] duration-500'>{t('btnWelcome')}</a>
    </div>
  )
}

export default Main