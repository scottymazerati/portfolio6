import React from 'react'
import { SiFacebook } from "react-icons/si"
import {GrInstagram} from "react-icons/gr"
import {FaSnapchat, FaTiktok} from "react-icons/fa"
import {RxDoubleArrowRight} from "react-icons/rx"
import {MdPublishedWithChanges} from "react-icons/md"
import {AiFillTwitterCircle} from "react-icons/ai"
import connect from '../assets/connectface.jpg'

const Contact = () => {
  return (

    <div name='Connect' className=' w-full mt-24'>
        <div className=' w-full h-[700px] bg-gray-900/90 absolute '>
            <img className=' w-full h-full object-cover mix-blend-overlay' src={connect} alt="/"  />
        </div>
        <div className=' max-w-[1240px] mx-auto text-rose-100 relative '>
            <div className=' px-4 py-12 '>
                <h2 className=' text-3xl uppercase pt-8 text-rose-100 text-center '>Connect</h2>
                <h3 className=' text-5xl font-bold py-8 text-center '>Social Media</h3>
                <p className=' text-center'>Stay in touch with Alex and his current artwoks and latest journeys of the mind and visuals by visiting at the top social media platforms.</p>
            </div>

            <div className=' grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                <div className=' bg-rose-100 rounded-xl shadow-2xl'>
                    <div className=' p-8'>
                        <SiFacebook className=' w-16 h-16 p-4 bg-gradient-to-r from-sky-400 to-cyan-300  text-black rounded-lg mt-[-4rem]' />
                        <h3 className=' font-bold text-2xl my-6 '>The Alex Grey @FB</h3>
                        <p className=' text-gray-600 text-xl'>Come join on Facebook</p>
                    </div>
                    <div className=' pl-8 py-4 bg-rose-300 rounded-lg'>
                        <p>Contact Us<RxDoubleArrowRight className=' w-5 ml-2' /></p>
                    </div>
                </div>
                <div className=' bg-rose-100 rounded-xl shadow-2xl'>
                    <div className=' p-8'>
                        <GrInstagram className=' w-16 h-16 p-4 bg-gradient-to-r from-sky-400 to-cyan-300  text-black rounded-lg mt-[-4rem]' />
                        <h3 className=' font-bold text-2xl my-6 '>The Alex Grey @Insta</h3>
                        <p className=' text-gray-600 text-xl'>Come join on Instagram</p>
                    </div>
                    <div className=' pl-8 py-4 bg-rose-300 rounded-lg'>
                        <p>Contact Us<RxDoubleArrowRight className=' w-5 ml-2' /></p>
                    </div>
                </div>
                <div className=' bg-rose-100 rounded-xl shadow-2xl'>
                    <div className=' p-8'>
                        <FaTiktok className=' w-16 h-16 p-4 bg-gradient-to-r from-sky-400 to-cyan-300  text-black rounded-lg mt-[-4rem]' />
                        <h3 className=' font-bold text-2xl my-6 '>The Alex Grey @TikTok</h3>
                        <p className=' text-gray-600 text-xl'>Come Join on TikTok</p>
                    </div>
                    <div className=' pl-8 py-4 bg-rose-300 rounded-lg'>
                        <p>Contact Us<RxDoubleArrowRight className=' w-5 ml-2' /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact