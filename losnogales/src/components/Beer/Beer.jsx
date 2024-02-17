import React from 'react'

const Beer = () => {
  return (
    <div className='flex justify-center items-center px-32 py-20'>
        <section className='w-1/2'>
            <img src="https://res.cloudinary.com/dreso9ye9/image/upload/v1708146453/Nogales/Group_2_4_vvjfkb.png" alt="" className='h-[34rem]'/>
        </section>
        <section className='w-1/2 flex flex-col gap-10'>
        <h2 className="text-6xl font-bold relative inline-block pb-3 w-max text-[#252525]">
        NUESTRA CERVEZA
        <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#252525]"></span>
        <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#252525]"></span> 
        </h2>
            <h3 className='font-lora text-2xl text-[#252525] italic'>A unique dinner works best with wine pairing</h3>
            <p className='text-[#252525] font-lora'>You can choose from a variety of styles, light and easy drinking, fresh and aromatic white wines or you could try intense and elegant red wines. Creative cuisine involves sophisticated wines.</p>
            <p className='text-[#252525] font-lora'>Vestibulum eleifend gravida neque a bibendum. Vivamus viverra velit non cursus elementum. Donec sit amet posuere ipsum. Mauris rutrum sagittis sapien text link. In vitae ipsum eleifend, auctor turpis in, vestibulum dui. Ut vestibulum, lorem id eleifend mollis, urna augue imperdiet ante, vitae aliquam turpis mauris eget nisi. Sed vel purus id velit molestie.</p>
        </section>
    </div>
  )
}

export default Beer