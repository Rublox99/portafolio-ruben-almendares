import React from 'react'
import Tabs from './Tabs'
import Divisor from './Divisor'

const Body = () => {
  return (

    <section className='h-5/6 bg-gray-900 py-16'>

        {/*HI!*/}
        <div className='flex px-5 py-12 justify-between mt-5'>

            {/*Who Am I*/}
            <div className="text-white px-20 text-5xl w-8/12 flex flex-col justify-center">

              <span className='text-left'>¡Hey!, I'm Ruben Almendares</span>

              <div className="text-lg mt-5 text-justify">
                Ingeniero en Sistemas con experiencia en el {""}
                <span className='text-red-500 underline decoration-1'>Desarrollo Frontend</span> enfocado al diseño y desarrollo
                de sitios web bajo los mejores estándares y mediante diversas tecnologías para asegurar excelentes y funcionales resultados.
              </div>

            </div>

            {/*Profile Pic*/}
            <div className='w-3/12 flex flex-col mr-5 justify-center'>
              <div className='flex flex-col w-full border-x-2 border-x-red-600 border-dashed rounded-full'>
                    <img src="/personalContent/ej_fotoPersonal.jpeg" className=" rounded-full"/>
              </div>
            </div>
        </div>

        {/*ABOUT ME*/}
        <Divisor/>
        <section className='flex justify-between'>

          <div className='w-5/12'>
          
          </div>
          
          {/*Talking about me*/}
          <div className='w-7/12 text-white text-justify flex flex-col mx-auto'>
            <p className='text-3xl'>About me</p>
            <p className='w-10/12'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt laborum magni distinctio, repudiandae
            consequatur quis voluptatum voluptatem? A eius vitae omnis aliquid reiciendis, molestiae voluptatum aliquam
            maxime consequatur reprehenderit perferendis! Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Tenetur laboriosam facilis vitae accusantium odit, alias corporis esse tempora officia perferendis eaque, 
            repudiandae maxime aperiam sed? In, quia? Molestiae, mollitia vitae.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus sit dolorem? Aliquam debitis 
            nam atque, rerum at maxime autem odit ipsum omnis perferendis commodi fuga ratione, quaerat quod voluptatum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit repellat assumenda repellendus quod voluptate
            sed. Consequatur tempora veniam mollitia incidunt excepturi quia placeat cupiditate, accusamus deleniti neque
            quas ad sequi!
            </p>
          </div>
        </section>

        {/*RESUME OF PROJECTS*/}
        <Divisor/>
        <section className='flex flex-col'>
          <span className='text-white mx-auto mb-2 text-3xl text-center'>Short resume of my projects</span>
          <Tabs/>
        </section>
        

    </section>
  )

}

export default Body
