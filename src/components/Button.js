import React from 'react'

export const Button = (title) => {
  return (
    <div>
      <button className='button h-5 w-20 text-xs sm:text-lg sm:h-10 sm:w-40 border-2 rounded-md border-zinc-900 mt-10 hover:text-amber-500 hover:border-amber-500'><a href="https://www.linkedin.com/in/deepika-sr-04042003/"> {title.title} </a></button>
    </div>
  )
}
