import React from 'react'
import { Player } from "@lottiefiles/react-lottie-player"

const Divisor = () => {
  return (
    <>
      <Player src='webGraphics/divisorWaves.json' className='w-full pointer-events-none' 
      loop autoplay speed={0.1}/>
    </>
  )
}

export default Divisor
