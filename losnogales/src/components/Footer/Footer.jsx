import React from 'react'
import { FaFacebookF, FaInstagram  } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

const Footer = () => {

  const { t } = useTranslation()

  return (
    <div className='bg-[#252525] py-8 flex flex-col justify-center items-center gap-5'>
      <div className='flex justify-center items-center gap-3 h-6'>
        <a className='rounded-full border-white border cursor-pointer p-2 hover:border-[#8C7C5E] duration-300'>
          <FaFacebookF className='text-lg text-white hover:text-[#8C7C5E] duration-300'/>
        </a>
        <a className='rounded-full border-white border cursor-pointer p-2 hover:border-[#8C7C5E] duration-300'>
          <FaInstagram className='text-lg text-white hover:text-[#8C7C5E] duration-300'/>
        </a>
        <a className='rounded-full border-white border cursor-pointer p-2 hover:border-[#8C7C5E] duration-300'>
          <BiLogoGmail className='text-lg text-white hover:text-[#8C7C5E] duration-300'/>
        </a>
      </div>
      <div className='flex flex-col justify-center items-center'>
        <span className="block text-sm text-slate-200 sm:text-center dark:text-slate-200 font-bold font-lora cursor-default">© 2024 <span>Los Nogales</span>. {t("rights")}</span>
        <a target='_blank' href="http://elizca.vercel.app" className='text-center text-sm font-bold pt-3 text-[#8C7C5E] flex justify-center items-center cursor-pointer'>{t("elizcaFooter")}</a>
      </div>
    </div>
  )
}

export default Footer