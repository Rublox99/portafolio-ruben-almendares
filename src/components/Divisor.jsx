import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player"

const Divisor = () => {
  return (
    <>
      <Player src='src/graphics/webGraphics/divisorWaves.json' className='w-full' 
      loop autoplay speed={0.1}/>
    </>
  )
}

export default Divisor
