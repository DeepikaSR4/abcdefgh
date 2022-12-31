import './App.css';
import React from 'react';
import { BsArrowDownCircle } from "react-icons/bs";
import{HiHeart} from 'react-icons/hi'
import {Navbar} from './components/Navbar.js';
import {Button} from './components/Button.js';
import {About} from './components/About.js';
import {Design} from './components/Design.js';
import {Development} from './components/Development.js';

function App() {
  return (
    <>
    <div className="App h-screen bg-white">
    <Navbar />
    <div className=' about text-sm pl-10 pt-24 font-mono sm:pl-20 sm:text-4xl sm:pt-36 '>
      <h4 className='about text-pink-500 pb-2'>hello! i am deepika</h4>
      <h4 className='about text-red-500 pb-2'>ui/ux designer <span>•</span> web developer</h4>
      <h4 className='about text-orange-500 pb-2'>previously <span>@</span> <a href="https://www.starved.app/" className='hover:text-gray-400'>starved</a></h4>
      <div className='button flex flex-row space-x-10 flex-wrap'>
      <Button link= 'https://www.linkedin.com/in/deepika-sr-04042003/' title= "my resume"/>
      </div>
      </div>
      <div className='arrow flex justify-end pr-4 pt-6 sm:pr-16 sm:pt-0'>
      <BsArrowDownCircle className='animate-bounce w-4 h-4 sm:w-10 sm:h-10 fill-sky-400'/>
      </div>
      <section id='#About' className='h-screen pt-24 font-mono pl-10 sm:pl-20'>
        <About/>
      </section>
      <section id='#Design' className='pt-24 font-mono pl-10 sm:pl-20'>
        <Design/>
      </section>
       <section id='#Development' className='pt-24 font-mono pl-10 sm:pl-20'>
        <Development/>
      </section>
      <section id='#Footer' className='h-2.5'>
        <div className='font-mono pb-10 pt-10 text-center flex flex-row justify-center'>
        <h4 className=' text-xs sm:text-sm'>
          created by Deepika with 
        </h4>
        <HiHeart className=' fill-red-500 ml-1'/>
        </div>
      </section>
    </div>
    </>
  );
}

export default App;
