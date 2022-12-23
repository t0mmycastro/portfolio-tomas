import React from 'react'

export const About = () => {
  return (
    <div name="acerca de mi" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Acerca de mí</p>
            </div>

            <p className='text-xl mt-20'>
              ¡Hola :)!, soy Tomás y tengo 20 años de edad, hace casi un año me egresé de una Escuela Técnica como programador y de ese momento no paré de seguir aprendiendo. Este año se me dio de empezar a estudiar Ciberseguridad, que es algo que me apasiona desde siempre. Soy una persona muy activa y dedicada a lo que se propone, intento perseguir lo que quiero hasta conseguirlo, además que me gusta trabajar en equipo y me desenvuelvo muy bien.
            </p>

            <br />

            <p className='text-xl'>
              Actualmente me encuentro en la búsqueda laboral como Desarrollador FrontEnd y como Analista en ciberseguridad/pentester, para poder seguir desarrollando de mejor manera mis conocimientos técnicos y seguir creciendo laboralmente.
            </p>

        </div>
    </div>
  )
}
