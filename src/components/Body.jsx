import React from 'react'
import Tabs from './Tabs'
import Divisor from './Divisor'
import Technologies from './Technologies'

const Body = () => {
  return (

    <section className='h-5/6 bg-gray-900 py-16'>

        {/*HI!*/}
        <div className='flex phone:flex-col px-5 pt-12 justify-between mt-5'>

            {/*Who Am I*/}
            <div className="text-white px-20 phone:px-0 text-5xl w-8/12 phone:w-full flex flex-col justify-center">

              <span className='text-left phone:text-center'>¡Hey! I'm Ruben Almendares</span>

              <div className="text-lg mt-5 text-justify phone:text-center">
                <span className='text-red-500'>Systems Engineer - Frontend Developer Jr</span>
                {""} focused on the design and development of websites under the best standards and through various 
                technologies to ensure excellent and functional results.
              </div>

            </div>

            {/*Profile Pic*/}
            <div className='w-3/12 phone:w-8/12 phone:mx-auto phone:my-16 flex justify-center flex-col mr-5'>
              <div className='flex flex-col w-11/12 shadow-2xl shadow-red-700 rounded-full border-2 border-red-700'>
                    <img src="/personalContent/foto-perfil.webp" className="rounded-full mx-auto"/>
              </div>
              <div className='w-11/12 flex justify-center'>
                <a href='https://drive.google.com/file/d/1RSjYSsv-1pQxR8Q8vhgQO5Kf9UDfVSoS/view?usp=sharing'
                className='w-5/12 flex justify-center border border-red-700 rounded-full transition-all shadow-2xl shadow-red-700 duration-500 px-15 py-1 bg-red-700 hover:bg-gray-900 hover:border-white active:bg-gray-900 active:border-white relative bottom-7 cursor-pointer'>
                  <svg fill='#ffffffff' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M22 0h-20v24h14l6-6v-18zm-6 18h4.36l-4.36 4.385v-4.385zm-3 1h-8v1h8v-1zm0-3h-8v1h8v-1zm6-2v-1h-14v1h14zm-7.059-4.968c-1.147-.265-2.214-.497-1.697-1.473 1.573-2.97.417-4.559-1.244-4.559-1.694 0-2.821 1.65-1.244 4.559.532.982-.575 1.214-1.697 1.473-1.024.237-1.062.745-1.059 1.635l.001.333h7.997l.001-.323c.004-.896-.03-1.407-1.058-1.645zm7.059.968h-4v1h4v-1zm0-2v-1h-4v1h4zm0-4h-4v1h4v-1z"/></svg>
                </a>
              </div>
            </div>
        </div>

        {/*ABOUT ME*/}
        <Divisor/>
        <section className='flex phone:flex-col phone:px-4 justify-between'>
          
          {/*Photo of myself - BIGGER RESOLUTION*/}
          <div className='phone:hidden flex w-4/12 scale-90 m-auto rounded-full'>
            <img src='personalContent/aboutMe_anim.jpg' className='w-full pointer-events-none rounded-full'/>
          </div>

          {/*Talking about me*/}
          <div className='w-7/12 phone:w-full phone:px-5 text-white phone:text-center text-justify flex flex-col phone:mx-auto'>
            <p className='text-3xl font-semibold phone:text-center'>About me</p>
            <div className='w-10/12 text-lg phone:w-full phone:text-justify'>
              <p className='my-2'>Technology has been my friend since childhood, generating global interest in that daily abstraction about 
              digital innovations and the logic behind them. Driven by this to be a systems engineer, I have been able to 
              learn several programming languages such as C++, Java, Python, as well as understand the logical and practical
              bases of MySQL, OracleDB, Networking Logic and programming in general.</p>
              <p className='my-2'>Meanwhile, as a self and lifelong learner, I have learned about Web Development technologies like HTML5, CSS5 
              and Javascript, as well as frameworks like React.js with utility libraries like Next, Node, Tailwind and complementary 
              technologies like Vite, EmailJS and LocalStorage.</p>
              <p className='my-2'>My focus is to improve as software and frontend developer to keep my knowledge up to date with quality practices and 
              to be able to create art through programming environments.</p>
              <p className='my-2'>I am a person motivated by creativity, personal growth and work excellence, pillars that allow me to bring a fresh 
              perspective to my work while being able to adapt to environments that require it. For this reason, I have dedicated 
              my skills, time and dedication (while learning even more) to the creation of this portfolio, which will showcase 
              myself and some of my projects.</p>
            </div>
          </div>
            
          {/*Photo of myself - PHONE*/}
          <div className='hidden phone:flex phone:mx-auto phone:w-8/12 rounded-full'>
            <img src='personalContent/aboutMe_anim.jpg' className='w-full pointer-events-none phone:py-20 rounded-full'/>
          </div>

        </section>

        {/*TECNHOLOGIES I HAVE USED*/}
        <Divisor/>
        <Technologies/>

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
