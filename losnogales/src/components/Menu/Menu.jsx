import React from 'react'
import { useTranslation } from 'react-i18next';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Menu = () => {

    const { t } = useTranslation()

  return (
    <div id='menu' className='w-full'>
        <section className='bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708139041/Nogales/S%C3%A1nguche_de_vac%C3%ADo_1_1_lbz515.png)] bg-cover lg:bg-fixed flex justify-center items-center bg-center'>
            <div className='h-[25rem] flex flex-col gap-10 justify-center items-center'>
                <h2 id='title' className="text-4xl lg:text-6xl font-bold relative inline-block pb-3 w-max text-white">
                {t('ourMenu')}
                <span id='title' className="absolute bottom-2 left-0 w-full h-[1px] bg-white"></span>
                <span id='title' className="absolute bottom-0 left-0 w-full h-[6px] bg-white"></span> 
                </h2>
                <p className='text-center font-lora italic text-white px-5 lg:px-44 text-lg'>{t('menuDescription')}</p>
            </div>
        </section>
        <section className='py-10 lg:py-20 w-full px-5 lg:px-0'>
            <Accordion type="single" collapsible className="w-full flex flex-col justify-center items-center">
                <AccordionItem value="item-1" className='w-full lg:w-[50rem] py-2'>
                    <AccordionTrigger className='border-4 border-[#252525]  w-full text-3xl font-bold text-[#252525] hover:no-underline hover:bg-[#252525] px-4 duration-500 hover:text-white'>{t('food')}</AccordionTrigger>
                    <AccordionContent className='pt-5 flex flex-col justify-center items-center gap-6'>
                        <article className='flex flex-col gap-6 w-full'>
                            <h2 className='text-[#252525] font-bold text-lg border-b-2 border-[#252525]'>{t('papasFritas')}</h2>
                            <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708140959/Nogales/papas-fritas_2_edxz7l.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>{t('papasClasicas')} <span className='font-extrabold'>$400</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('papasClasicasDesc')}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708140977/Nogales/poutine_1_gkpmkk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>{t('papasCheddar')} <span className='font-extrabold'>$450</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('papasCheddarDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className='flex flex-col gap-6 w-full'>
                            <h2 className='text-[#252525] font-bold text-lg border-b-2 border-[#252525]'>{t('burgers')}</h2>
                            <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708142291/Nogales/hamburguesa_1_p0fie0.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>{t('burgerSimple')} <span className='font-extrabold'>$500</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('burgerSimpleDesc')}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708142311/Nogales/hamburguesa_2_cszyao.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>{t('burgerFull')} <span className='font-extrabold'>$550</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('burgerFullDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className='flex flex-col gap-6 w-full'>
                            <h2 className='text-[#252525] font-bold text-lg border-b-2 border-[#252525]'>PIZZAS</h2>
                            <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708142665/Nogales/pizza_g4bjv9.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>MUZARELLA <span className='font-extrabold'>$400</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('muzarellaDesc')}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708142668/Nogales/pizza_1_lfb0cn.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>{t('pizzaEspecial')} <span className='font-extrabold'>$450</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('especialDesc')}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='w-full lg:w-[50rem] py-2'>
                    <AccordionTrigger className='border-4 border-[#252525]  w-full text-3xl font-bold text-[#252525] hover:no-underline hover:bg-[#252525] px-4 duration-500 hover:text-white'>{t('beer')}</AccordionTrigger>
                    <AccordionContent className='pt-5 flex flex-col justify-center items-center gap-6'>
                        <article className='flex flex-col gap-6 w-full'>
                            <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143740/Nogales/cerveza_2_ynftdk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>RUBIA <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('rubia')}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143740/Nogales/cerveza_2_ynftdk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>ROJA <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('roja')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143740/Nogales/cerveza_2_ynftdk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>NEGRA <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('negra')}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143740/Nogales/cerveza_2_ynftdk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>IPA <span className='font-extrabold'>$350</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('ipa')}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='w-full lg:w-[50rem] py-2'>
                    <AccordionTrigger className='border-4 border-[#252525]  w-full text-3xl font-bold text-[#252525] hover:no-underline hover:bg-[#252525] px-4 duration-500 hover:text-white'>{t('drink')}</AccordionTrigger>
                    <AccordionContent className='pt-5 flex flex-col justify-center items-center gap-6'>
                        <article className='flex flex-col gap-6 w-full'>
                            <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143742/Nogales/tequila_jz10zz.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>FERNET <span className='font-extrabold'>$350</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('fernet')}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143742/Nogales/tequila_jz10zz.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>SMIRNOFF <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('vodka')}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col lg:flex lg:flex-row lg:justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143742/Nogales/tequila_jz10zz.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>MOJITO <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('mojito')}</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143742/Nogales/tequila_jz10zz.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>MOJITO MALIBU <span className='font-extrabold'>$350</span></h3>
                                        <p className='font-lora italic text-[#252525]'>{t('mojitoMalibu')}</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>
    </div>
  )
}

export default Menu