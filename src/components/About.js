import React from 'react'
import{AiFillLinkedin,AiFillGithub,AiFillDribbbleCircle,AiFillTwitterCircle} from 'react-icons/ai'
export const About = () => {
  return (
    <div className='aboutpage h-screen'>
    <h1 className='heading1 text-sm sm:text-2xl pt-2 text-red-400'>a little about myself</h1>
    <div className='abouttcontent text-[1.5vh] md:text-[3vh] pt-16 text-right flex'>
        <div className='w-1/3'></div>
        <div className='about w-2/3 pr-[2vw] text-zinc-800 sm:pr-28'><h2>I am passionate about helping organizations and individuals reach their potential. My background  has enabled me to develop strong interpersonal and problem-solving skills, which I use to create a positive and successful outcome for my clients.I am always looking for new opportunities that will allow me to use my skills and knowledge to help others. I believe that collaboration and communication are key to achieving success, and I enjoy working with clients to create solutions that meet their needs.I am proud of the work I have done and I am excited to continue to grow and learn. I am confident in my ability to help people and organizations reach their full potential, and I believe that I can bring value to any project.</h2>
        <div className='flex flex-row justify-end space-x-5 pt-5 pb-10 text-xl text-gray-500 sm:text-4xl'>
        <a href='https://www.linkedin.com/in/deepika-sr-04042003/'><AiFillLinkedin/></a>
        <a href='https://github.com/DeepikaSR4'><AiFillGithub/></a>
        <a href='https://dribbble.com/DeepikaSR'><AiFillDribbbleCircle/></a>
        <a href='https://twitter.com/d_4_deepika'><AiFillTwitterCircle/></a>
        </div>

        </div>
    </div>
    </div>
  )
}
