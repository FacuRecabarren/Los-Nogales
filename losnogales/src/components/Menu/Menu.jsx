import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const Menu = () => {
  return (
    <div className='w-full'>
        <section className='bg-[url(https://res.cloudinary.com/dreso9ye9/image/upload/v1708139041/Nogales/S%C3%A1nguche_de_vac%C3%ADo_1_1_lbz515.png)] bg-cover bg-fixed flex justify-center items-center'>
            <div className='h-[25rem] flex flex-col gap-10 justify-center items-center'>
                <h2 id='title' className="text-6xl font-bold relative inline-block pb-3 w-max text-white">
                NUESTRO MENÚ
                <span id='title' className="absolute bottom-2 left-0 w-full h-[1px] bg-white"></span>
                <span id='title' className="absolute bottom-0 left-0 w-full h-[6px] bg-white"></span> 
                </h2>
                <p className='text-center font-lora italic text-white px-44 text-lg'>Explore texture, color and of course the ultimate tastes with our menu of the season. All the ingredients are fresh and carefully selected by our chefs. Enjoy an extraordinary dinning experience.</p>
            </div>
        </section>
        <section className='py-20 w-full'>
            <Accordion type="single" collapsible className="w-full flex flex-col justify-center items-center">
                <AccordionItem value="item-1" className='w-[50rem] py-2'>
                    <AccordionTrigger className='border-4 border-[#252525]  w-full text-3xl font-bold text-[#252525] hover:no-underline hover:bg-[#252525] px-4 duration-500 hover:text-white'>COMIDA</AccordionTrigger>
                    <AccordionContent className='pt-5 flex flex-col justify-center items-center gap-6'>
                        <article className='flex flex-col gap-6 w-full'>
                            <h2 className='text-[#252525] font-bold text-lg border-b-2 border-[#252525]'>PAPAS FRITAS</h2>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708140959/Nogales/papas-fritas_2_edxz7l.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>PAPAS CLÁSICAS <span className='font-extrabold'>$400</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Papas fritas con acompañamiento de cheddar</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708140977/Nogales/poutine_1_gkpmkk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>PAPAS CHEDDAR <span className='font-extrabold'>$450</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Papas fritas con cheddar, bacon y cebollas de verdeo</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className='flex flex-col gap-6 w-full'>
                            <h2 className='text-[#252525] font-bold text-lg border-b-2 border-[#252525]'>HAMBURGUESAS</h2>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708142291/Nogales/hamburguesa_1_p0fie0.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>SIMPLE <span className='font-extrabold'>$500</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Pan, un medallon de carne, cheddar, tomate y lechuga</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708142311/Nogales/hamburguesa_2_cszyao.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>COMPLETA <span className='font-extrabold'>$550</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Pan, un medallon de carne, cheddar, bacon, huevo, tomate y lechuga</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className='flex flex-col gap-6 w-full'>
                            <h2 className='text-[#252525] font-bold text-lg border-b-2 border-[#252525]'>PIZZAS</h2>
                            <div className='flex justify-between items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708142665/Nogales/pizza_g4bjv9.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>MUZARELLA <span className='font-extrabold'>$400</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Salsa de tomate, muzarella y aceitunas</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708142668/Nogales/pizza_1_lfb0cn.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>ESPECIAL <span className='font-extrabold'>$450</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Salsa de tomate, muzarella, jamon cocido y aceitunas</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className='w-[50rem] py-2'>
                    <AccordionTrigger className='border-4 border-[#252525]  w-full text-3xl font-bold text-[#252525] hover:no-underline hover:bg-[#252525] px-4 duration-500 hover:text-white'>CERVEZAS</AccordionTrigger>
                    <AccordionContent className='pt-5 flex flex-col justify-center items-center gap-6'>
                        <article className='flex flex-col gap-6 w-full'>
                            <div className='flex justify-center items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143740/Nogales/cerveza_2_ynftdk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>RUBIA <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Dorada, equilibrada entre maltas y lúpulos, refrescante</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143740/Nogales/cerveza_2_ynftdk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>ROJA <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Cobrizo a rojizo, suave y maltosa con toques de caramelo</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143740/Nogales/cerveza_2_ynftdk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>NEGRA <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Oscura, robusta y tostada, con notas de café y chocolate</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143740/Nogales/cerveza_2_ynftdk.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>IPA <span className='font-extrabold'>$350</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Dorada a ámbar, amarga y aromática, con un fuerte perfil de lúpulo</p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className='w-[50rem] py-2'>
                    <AccordionTrigger className='border-4 border-[#252525]  w-full text-3xl font-bold text-[#252525] hover:no-underline hover:bg-[#252525] px-4 duration-500 hover:text-white'>TRAGOS</AccordionTrigger>
                    <AccordionContent className='pt-5 flex flex-col justify-center items-center gap-6'>
                        <article className='flex flex-col gap-6 w-full'>
                            <div className='flex justify-center items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143742/Nogales/tequila_jz10zz.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>FERNET <span className='font-extrabold'>$350</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Licor amargo de hierbas con un sabor distintivo a anís y hierbas medicinales</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143742/Nogales/tequila_jz10zz.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>SMIRNOFF <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Refrescante combinación de vodka Smirnoff y refresco de lima-limón Sprite</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-4'>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143742/Nogales/tequila_jz10zz.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>MOJITO <span className='font-extrabold'>$300</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Cóctel refrescante originario de Cuba, hecho con ron blanco, azúcar, jugo de lima, menta y soda.</p>
                                    </div>
                                </div>
                                <div className='flex justify-start items-center w-full gap-4'>
                                    <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708143742/Nogales/tequila_jz10zz.png" alt="" className='w-12 bg-[#26170A] p-2 rounded-xl'/>
                                    <div>
                                        <h3 className='flex justify-between text-base font-semibold text-[#252525]'>MOJITO MALIBU <span className='font-extrabold'>$350</span></h3>
                                        <p className='font-lora italic text-[#252525]'>Incorpora Malibú, un licor de ron con sabor a coco, añadiendo una dulzura tropical al cóctel clásico</p>
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