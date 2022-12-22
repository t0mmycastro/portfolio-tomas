import React from 'react'
import Foto from '../assets/foto.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    Soy desarrollador Front-End y Analista en Ciberseguridad
                </h2>
                <p className='text-gray-500 py-4 max-w-md'>
                    Tengo mas de 2 años de experiencia diseñando y creando aplicaciones.
                    Actualmente, me encuentro estudiando Ciberseguridad y profundizando todavía
                    Mas con React, Tailwind.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-lime-300 to-green-300 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={Foto} alt='my profile' className='rounded-2xl mx-auto w-2/3 md:w-full'></img>
            </div>
        </div>
    </div>
  )
}

export default Home