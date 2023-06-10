import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

const Header = () => {
  const [posicionScrollY, setPosicionScrollY]= useState(0);
  
  //Cambio visual en el navbar al hacer scroll
  window.onscroll = () => {
    const posicionY= window.scrollY;
    setPosicionScrollY(posicionY);
  }

  useEffect( () => {
    if (posicionScrollY> 0){
      //console.log(posicionScrollY)
    }
  }, [posicionScrollY])
  //------------------------------------------
  
  return (

    <div className='bg-gray-900 relative'>
        
        <nav className='px-5 py-5 w-full text-white bg-gray-900 font-medium text-lg flex uppercase items-center fixed top-0'>
          <span className='w-2/6 text-xl normal-case left-0'>Done with React & Vite</span>

          <ul className='w-4/6 text-white uppercase flex justify-end'>
            <li className='mx-5 hover:text-red-500 transition-all'><a href="">Home</a></li>|
            <li className='mx-5 hover:text-red-500 transition-all'><a href="">My knowledge </a></li>|
            <li className='mx-5 hover:text-red-500 transition-all'><a href="">¿How to contact me?</a></li>
          </ul>
        </nav>

    </div>
  )
}

export default Header
