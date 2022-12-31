import React from 'react'
import {Card} from './Card.js'
import ciniflex from './images/ciniflex.jpg'
import starved from './images/starved.jpg'
import mockup from './images/mockup.jpg'
export const Design = () => {
  return (
    <div>
        <h1 className='heading1 text-sm sm:text-2xl pt-64 sm:pt-32 text-red-400'>design works</h1>

        <div className='flex project'>
        <div className='w-1/2'></div>
        <div className='w-1/2 flex justify-start flex-col'>
        <a href='https://medium.com/@deepikasr4/ux-ui-intern-starved-d07c31e3b946'>
        <Card imagelink={starved}/>
        </a>
        </div>
        </div>

        <div className='flex project'>
        <div className='w-1/2 flex justify-center'>
        <a href='https://deepikasr4.medium.com/ux-case-study-ciniflex-8d5f1e9928'>
        <Card imagelink={ciniflex}/>
        </a>
        </div>
        <div className='w-1/2'></div>
        </div>

        <div className='flex project'>
        <div className='w-1/2'></div>
        <div className='w-1/2 flex justify-start'>
        <a href='https://deepikasr4.medium.com/ux-case-study-spotify-413dc5e94fe9'>
        <Card imagelink={mockup}/>
        </a>
        </div>
        </div>


    </div>
  )
}
