import React from 'react'

/*bg-svg1 bg-center bg-cover*/
const Footer = () => {
  return (
    <section className='text-white p-1 w-full bg-red-800 flex justify-between mt-auto'>
      <ul className='flex'>
        <li className='mx-1 flex hover:invert transition-all duration-200'><img src="webGraphics/favicon-twitter.svg" className='mx-1 invert'/><a href="">Twitter</a></li>
        <li className='mx-1 flex hover:invert transition-all duration-200'><img src="webGraphics/favicon-instagram.svg" className='mx-1 invert'/><a href="">Instagram</a></li>
        <li className='mx-1 flex hover:invert transition-all duration-200'><img src="webGraphics/favicon-linkedin.svg" className='mx-1 invert'/><a href="">Linkedin</a></li>
      </ul>
      <div className='uppercase italic'>Tegucigalpa, Honduras</div>
    </section>
  )
}

export default Footer
