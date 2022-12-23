import React from 'react'

export const Contact = () => {
  return (
    <div name='contacto' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contacto</p>
                <p className='py-6'>¡Completa el formulario para contactarme!</p>
            </div>


            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/67716eb4-5143-41e4-8ce3-3b60830bb9d8' method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder="Coloca tu nombre" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <input type="text" name="email" placeholder="Coloca tu email" className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder="Coloca tu mensaje" className="bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

                    <button className='text-white bg-gradient-to-b from-lime-300 to-green-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Enviar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
