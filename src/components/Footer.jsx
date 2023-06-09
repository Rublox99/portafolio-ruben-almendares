import React from 'react'

/*bg-svg1 bg-center bg-cover*/
const Footer = () => {
  return (
    <section className='h-2/6 w-full bg-gray-900 text-white flex justify-center'>
      <section className='flex flex-col justify-center w-2/6'>
          <label className='font-normal mx-auto'>I'm open to criticism for improvement</label>
          <textarea name="Comentario" id="idComentario" className='text-black rounded-md resize-none'></textarea>
          <input type="button" value="Enviar" className='text-center mt-1 rounded-md bg-red-700 cursor-pointer hover:bg-red-500 transition-all'/>
      </section>
    </section>
  )
}

export default Footer
