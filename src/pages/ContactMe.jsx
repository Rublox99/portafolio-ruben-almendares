import React, { useRef } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error from '../components/Error'
import { useState } from 'react'
import emailjs from 'emailjs-com'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError]= useState(false);

  function sendEmail (e) {
    e.preventDefault();
  
    if ([name, email, msg].includes("")){
      setError(true)
    }else{
      setError(false)
      setName("")
      setEmail("")
      setMsg("")
  
      emailjs.sendForm('gmail', 'template_kdfz47o', e.target, 'YoE5iUlXq8A5FL5kb')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
  }

  return (
    <div className='bg-gray-900 flex flex-col h-screen phone:h-screen rotatedPhone:h-full'>
      <Header />
      <form onSubmit={sendEmail} className='text-white text-lg flex phone:flex-col tablet:pt-16 rotatedPhone:pt-0 justify-center m-auto h-full w-full'>
        {/*FORMULARIO DE CONTACTO*/}
        <div className='flex flex-col w-1/4 phone:w-full py-28 phone:mt-20 phone:py-2 phone:px-5 mx-5 phone:mx-0'>
          <label>Full name</label>
          <input type="text" name="name" id='nombreCompleto' className={classNames('my-1 px-1 text-base bg-transparent border-b border-white transition-all',
            'hover:bg-white hover:rounded-sm hover:border-black hover:text-black')}
            value={name} onChange={e => setName(e.target.value)} />
          <label>E-mail</label>
          <input type="email" name="email" id='correoElectronico' className={classNames('my-1 px-1 text-base bg-transparent border-b border-white transition-all',
            'hover:bg-white hover:rounded-sm hover:border-black hover:text-black')}
            value={email} onChange={e => setEmail(e.target.value)} />
          <label>Message</label>
          <textarea name="message" type="text" id='mensaje' className={classNames('my-1 px-1 h-4/6 longHeight:h-3/6 rotatedPhone:py-5 text-start resize-none text-base bg-transparent border-b rounded-sm border-white transition-all',
            'hover:bg-white hover:rounded-sm hover:border-black hover:text-black')}
            value={msg} onChange={e => setMsg(e.target.value)} />

          <button type='submit' className='bg-red-800 rounded-sm my-5 uppercase active:scale-95 hover:bg-red-500 transition-all'>Contact me</button>
          {error && (<Error mensaje="All the fields are required"/>)}
          <span className='text-center text-xs'>(Yes, this section is functional)</span>
        </div>

        {/*MEDIOS DE CONTACTO*/}
        <div className='text-white my-20 justify-center flex flex-col phone:text-center'>
          <label className='font-semibold text-lg'>You can contact me through my email:</label>
          <p className='text-sm'>camiloalmendarez47@gmail.com</p>

          <label className='font-semibold text-lg phone:mt-2'>By a phone call:</label>
          <p className='text-sm'>(+504) 96609963</p>

          <label className='font-semibold text-lg phone:mt-2'>Or on my platforms:</label>
          <ul className='flex justify-start mt-1 phone:justify-center phone:mb-5'>
            <li className='mr-7 flex hover:invert transition-all duration-200'><a href="https://github.com/Rublox99" className='my-auto'><img src="webGraphics/favicon-github.svg" className='invert'/></a></li>
            <li className='mr-7 flex hover:invert transition-all duration-200'><a href="https://t.me/rub_av" className='my-auto'><img src="webGraphics/favicon-telegram.svg" className='invert'/></a></li>
            <li className='flex hover:invert transition-all duration-200'><a href="https://www.linkedin.com/in/rubenalmendareshn/" className='my-auto'><img src="webGraphics/favicon-linkedin.svg" className='invert'/></a></li>
          </ul>
        </div>
      </form>
      
      <Footer />
    </div>
  )
}

export default ContactMe
