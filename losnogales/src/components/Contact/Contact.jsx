import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const Contact = () => {

  return (
    <div className='py-20 flex justify-center items-start px-20 gap-12'>
        <section className='w-1/2 flex flex-col justify-center items-start gap-10'>
            <h2 className="text-5xl font-bold relative inline-block pb-3 w-max text-[#252525]">
            RESERVAR
            <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#252525]"></span>
            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#252525]"></span> 
            </h2>
            <div className='flex flex-col gap-10 w-full'>
                <div className='flex flex-col gap-2'>
                    <label className='font-lora' htmlFor="">Nombre</label>
                    <input className='w-full outline-none border py-2 px-3' type="text" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-lora' htmlFor="">Correo electrónico</label>
                    <input className='w-full outline-none border py-2 px-3' type="email" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label className='font-lora' htmlFor="">Mensaje</label>
                    <textarea className='w-full outline-none border py-2 px-3' name="" id="" cols="30" rows="3"></textarea>
                </div>
            </div>
        </section>
        <section className='w-1/2 flex flex-col justify-center items-start gap-10'>
            <h2 className="text-5xl font-bold relative inline-block pb-3 w-max text-[#252525]">
            UBICACIÓN
            <span className="absolute bottom-2 left-0 w-full h-[1px] bg-[#252525]"></span>
            <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#252525]"></span> 
            </h2>
            <MapContainer
                center={[-33.00593000803616, -68.73006488894471]}
                zoom={13}
                className='h-[20rem] w-full rounded-xl shadow-sombra-imagenes px-4'
            >
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL del proveedor de mapas (en este caso, OpenStreetMap)
                />

                {/* Marcador en la ubicación especificada */}
                <Marker position={[-33.00593000803616, -68.73006488894471]}>
                <Popup>
                Los Nogales
                </Popup>
                </Marker>
            </MapContainer>
        </section>
    </div>
  )
}

export default Contact