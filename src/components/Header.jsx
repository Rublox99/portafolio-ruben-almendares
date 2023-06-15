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

    <div className='bg-gray-900'>
        
        {/*BUTTON para Responsive Navbar Phone*/}
        <div alt="navbar-button" className={(movimiento ? 
        'hidden phone:flex phone:fixed z-50 w-full h-14 bg-gray-900 transition-all duration-300' 
        : 
        'hidden phone:flex phone:fixed z-50 w-full h-14 bg-red-800 transition-all duration-300')}>
          <span className= {navbar ? classNames("hidden") : classNames("w-full mr-auto z-50 my-auto px-3 text-white text-xl")}>
            Made with React & Vite
          </span>
          <div className='flex flex-col w-full absolute'>
            <ul className={( 
              navbar ? 
              classNames('w-full py-2 text-white z-50 uppercase flex justify-center flex-col mx-auto text-center bg-red-800 visible transition-all duration-100')
              :
              classNames("flex-row text-center transition-all invisible uppercase opacity-0 ease-in duration-75"))}>
              <li className="mx-5 active:font-bold transition-all duration-200"><a href="/">Home</a></li><span className='phone:hidden'>|</span>
              <li className="mx-5 active:font-bold transition-all duration-200"><a href="/myKnowledge">My knowledge </a></li><span className='phone:hidden'>|</span>
              <li className="mx-5 active:font-bold transition-all duration-200"><a href="/contactMe">¿How to contact me?</a></li>
            </ul>
          </div>
          <img src="webGraphics/navbar-icon.svg" onClick={navbarExtend} alt="navbar-icon" className='h-14 w-1/4 z-50 absolute right-0 tablet:pl-20 phone:pl-0 p-1 active:scale-90 animate-pulse transition-all'/>
        </div>
       
       {/*NAVBAR width>835px*/}
        <nav className= {(classNames("px-5 py-5 w-full z-50 text-lg font-semibold text-white phone:hidden flex items-center fixed transition-all duration-500",
        movimiento ? classNames("bg-red-800") : classNames("bg-gray-900")))}>
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
