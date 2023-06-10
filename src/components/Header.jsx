import React from 'react'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {

  const [movimiento, setMovimiento]= useState(false);
  
  //Cambio visual en el navbar al hacer scroll
  window.onscroll = () => {
    const posicionY= window.scrollY;

    if(posicionY>= 50){
      setMovimiento(true)
    } else{
      setMovimiento(false)
    }
  }
  //------------------------------------------
  
  return (

    <div className='bg-gray-900 relative'>
        
        <nav className= {(classNames("px-5 py-5 w-full text-white font-medium text-lg flex uppercase items-center fixed top-0 transition-all duration-500",
        movimiento ? classNames("bg-red-800") : classNames("bg-gray-900")))}>
          <span className='w-2/6 text-xl normal-case left-0'>Done with React & Vite</span>

          <ul className='w-4/6 text-white uppercase flex justify-end'>
            <li className={movimiento ? classNames("mx-5 hover:text-gray-900 transition-all") : classNames("mx-5 hover:text-red-800 transition-all")}><a href="">Home</a></li>|
            <li className={movimiento ? classNames("mx-5 hover:text-gray-900 transition-all") : classNames("mx-5 hover:text-red-800 transition-all")}><a href="">My knowledge </a></li>|
            <li className={movimiento ? classNames("mx-5 hover:text-gray-900 transition-all") : classNames("mx-5 hover:text-red-800 transition-all")}><a href="">¿How to contact me?</a></li>
          </ul>
        </nav>

    </div>
  )
}

export default Header
