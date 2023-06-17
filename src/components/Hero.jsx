import React from 'react';
import { HiHome, HiOutlineChatBubbleOvalLeftEllipsis, HiTag, HiPuzzlePiece, HiIdentification } from "react-icons/hi2";
import { CgEditUnmask } from "react-icons/cg";
import heroImg  from '../assets/hero.jpg';


const Hero = () => {
  return (
    <div name='Home' className=' -z-50 w-full h-screen bg-transparent flex flex-col justify-between mb-32 sm:mb-[250px]'>
        <div className=' grid md:grid-cols-2 max-w-[1240px] max-h-[600px] m-auto'>
            <div className=' flex flex-col justify-center md:items-start w-full px-6 py-20'>
              <p className=' text-cyan-600 text-2xl transition duration-500 hover:text-rose-300'>See into the mind of</p>
              <h1 className=' text-cyan-600 py-3 text-5xl md:text-7xl font-bold transition duration-500 hover:text-rose-300'>Alex Grey</h1>
              <p className=' text-cyan-600 text-2xl transition duration-500 hover:text-rose-300'>Where imagination lives</p>
              <button className=' bg-gradient-to-r from-sky-400 to-cyan-300 font-bold py-3 px-6 text-blue-800 text-xl sm:w-[60%] my-4 drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-110 hover:bg-rose-100'>A Phsychedelic Realist</button>
            </div>
            <div className=' justify-center max-h-[800px]'>
            <img className='-z-[9999] w-[100%] h-[80%] rounded-full drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-110' src={heroImg} alt='flamelady' />
            </div>
            <div className=' text-blue-800 hover:text-indigo-600 mt-[-140px] flex flex-col py-6 md:min-w-[760px] bottom-[-5%]
                             mx-1 md:left-1/2 bg-gradient-to-r from-sky-400 to-cyan-300 border border-slate-300 rounded-xl text-center
                            drop-shadow-[0_35px_35px_rgba(0,0,0,0.45)] transition duration-500 hover:scale-110 hover:bg-rose-100'>
                <p className=' my-3 mx-2 text-2xl font-semibold'>Alex is a world renowned painter and artist who exsplains the meaning of his work in such self authored books as:</p>
              <div className='flex justify-center font-bold'>
                <p className=' m-2 flex'><CgEditUnmask className=' text-black mx-1'/>The Sacred Mirrors</p>
                <p className=' m-2 flex'><CgEditUnmask className=' text-black mx-1'/>Net Of Being</p>
                <p className=' m-2 flex'><CgEditUnmask className=' text-black mx-1'/>Visions</p>
                <p className=' m-2 flex'><CgEditUnmask className=' text-black mx-1'/>Transfigurations</p>
              </div>
            </div>
        </div>
     </div>

  )
}

export default Hero