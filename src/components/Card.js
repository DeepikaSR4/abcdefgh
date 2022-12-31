import React from 'react'

export const Card = (image) => {
  return (
    <div> 
       
        <div className='Card w-28 h-28 border-zinc-100 shadow-md rounded-lg mt-8 flex flex-col sm:w-72 sm:h-72'>
        <img src={image.imagelink} alt='img' className='w-28 h-28 rounded-lg hover:opacity-75 sm:w-72 sm:h-72'></img>
        </div>
       
    </div>
  )
}
