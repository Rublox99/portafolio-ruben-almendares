import React from 'react'
import { useState } from 'react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {

  const [movimiento, setMovimiento]= useState(false);
  const [navbar, setNavbar]= useState(false);
  
  const navbarExtend= () =>{
    if(navbar){
      setNavbar(false)
    } else{
      setNavbar(true)
    }
  }

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

    <div className='bg-gray-900 '>
        
        {/*BUTTON para Responsive Phone*/}
        <div alt="navbar-button" className='hidden phone:flex phone:fixed w-full h-14 bg-red-800'>
          <span className= {(classNames('mr-auto my-auto px-1 text-white text-xl'))}>Made with React & Vite</span>
          <img src="webGraphics/navbar-icon.svg" onClick={navbarExtend} alt="navbar-icon" className='h-14 absolute right-0 p-1 active:scale-90 transition-all'/>
        </div>
       
       {/*NAVBAR CON RESPONSIVE*/}
        <nav className= {(classNames("px-5 py-5 w-full text-lg font-semibold text-white flex items-center fixed transition-all duration-500",
        movimiento ? classNames("bg-red-800") : classNames("bg-gray-900")),
        navbar ? classNames("phone:fixed phone:w-full phone:mt-0 phone:bg-red-800") : classNames("phone:hidden"))}>
          <span className='w-2/6 text-xl left-0 phone:hidden flex'>Made with React & Vite</span>

          <ul className='w-4/6 text-white uppercase flex justify-end phone:justify-center phone:w-full phone:flex-col phone:text-center'>
            <li className={movimiento ? classNames("mx-5 hover:text-gray-900 transition-all") : classNames("mx-5 hover:text-red-800 transition-all")}><a href="/">Home</a></li><span className='phone:hidden'>|</span>
            <li className={movimiento ? classNames("mx-5 hover:text-gray-900 transition-all") : classNames("mx-5 hover:text-red-800 transition-all")}><a href="/myKnowledge">My knowledge </a></li><span className='phone:hidden'>|</span>
            <li className={movimiento ? classNames("mx-5 hover:text-gray-900 transition-all") : classNames("mx-5 hover:text-red-800 transition-all")}><a href="/contactMe">¿How to contact me?</a></li>
          </ul>
        </nav>

    </div>
  )
}

export default Header
