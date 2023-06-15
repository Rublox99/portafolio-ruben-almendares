import React from 'react'

/*bg-svg1 bg-center bg-cover*/
const Footer = () => {
  return (
    <section className='text-white text-sm p-1 rotatedPhone:p-0 w-full bg-red-800 flex phone:flex-col tablet:flex-row justify-between mt-auto'>
      <ul className='flex phone:justify-center phone:py-1 rotatedPhone:py-0'>
        <li className='mx-1 flex hover:invert transition-all duration-200'><img src="webGraphics/favicon-whatsapp.svg" className='mx-1 invert scale-75'/><a href="https://wa.link/jax1s7" className='my-auto'>Whatsapp</a></li>
        <li className='mx-1 flex hover:invert transition-all duration-200'><img src="webGraphics/favicon-twitter.svg" className='mx-1 invert scale-75'/><a href="https://twitter.com/CamiloAlmendar2" className='my-auto'>Twitter</a></li>
        <li className='mx-1 flex hover:invert transition-all duration-200'><img src="webGraphics/favicon-instagram.svg" className='mx-1 invert scale-75'/><a href="https://www.instagram.com/jcamilo.rar/" className='my-auto'>Instagram</a></li>
      </ul>
      <div className='uppercase italic my-auto phone:text-center'>Tegucigalpa, Honduras</div>
    </section>
  )
}

export default Footer
