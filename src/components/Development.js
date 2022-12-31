import React from 'react'
import {Card} from './Card.js'
import itiha from './images/itiha.jpg'
import rupeex from './images/rupeex.jpg'
export const Development = () => {
  return (
    <div>
        <h1 className='heading1 text-sm sm:text-2xl text-red-400'>dev projects</h1>

        <div className='flex project pt-16'>
        <div className='w-1/2'></div>
        <div className='w-1/2 flex justify-start flex-col'>
        <a href="https://itiha.riet.net.in/">
        <Card imagelink={itiha}/>
        </a>
        </div>
        </div>

        <div className='flex project'>
        <div className='w-1/2 flex justify-center'>
        <a href="https://deepikasr4-currency-convertor-main-5s4lnu.streamlit.app/">
        <Card imagelink={rupeex}/>
        </a>
        </div>
        <div className='w-1/2'></div>
        </div>

</div>
  )
}
