import React from 'react'

const Body = () => {
  return (

    <section className='h-5/6 bg-gray-900 my-16'>

        <div className='flex px-5 py-24 justify-between mt-5'>

            <div className="text-white px-20 text-5xl w-3/5 flex flex-col justify-center text-center">

              ¡Hey!, I'm Ruben Almendares

              <div className="text-lg mt-5 text-center">
                Ingeniero en Sistemas con experiencia en el {""}
                <span className='text-red-500 underline decoration-1'>Desarrollo Frontend</span> enfocado al diseño y desarrollo
                de sitios web bajo los mejores estándares y mediante diversas tecnologías para asegurar excelentes y funcionales resultados.
              </div>

            </div>

            <div className='w-3/12 flex flex-col justify-center'>
              <div className='flex flex-col border-x-2 border-x-red-600 border-y-red-950 border-dashed rounded-full'>
                    <img src="src/graphics/personalContent/ej_fotoPersonal.jpeg" className=" rounded-full"/>
              </div>
            </div>
        </div>

        <div className="mt-5 h-2/5">

        </div>

    </section>
  )

}

export default Body
