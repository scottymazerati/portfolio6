import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai';


const Pricing = () => {
  return (
   <div name='Pricing' className=' w-full text-cyan-600 my-24'>
        <div className=' w-full h-[800px] bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 absolute mix-blend-overlay'></div>

        <div className=' max-w-[1240px] mx-auto py-12'>
            <div className=' text-center py-8 text-cyan-600'>
                <h3 className=' text-3xl uppercase'>Pricing</h3>
                <h3 className=' my-4 text-5xl font-bold text-cyan-500'>the right pricing for your research</h3>
                <p className=' text-3xl'>Something about 20 words or so to describe what sizes they can choose from</p>
            </div>

            <div className=' grid md:grid-cols-2'>

                <div>
                    <span>Standard</span>
                    <div>
                        <p>$49<span>/mo</span></p>
                    </div>
                        <p>somthing around 10 to 20 words</p>
                        <div>
                            <p><AiOutlineCheckCircle className=' w-8 h-8 mr-5 text-emerald-400' />features price includes</p>
                            <p><AiOutlineCheckCircle className=' w-8 h-8 mr-5 text-emerald-400' />features price includes</p>
                            <p><AiOutlineCheckCircle className=' w-8 h-8 mr-5 text-emerald-400' />features price includes</p>
                            <p><AiOutlineCheckCircle className=' w-8 h-8 mr-5 text-emerald-400' />features price includes</p>
                            <button className=' font-bold '>Choose This Size</button>
                        </div>
                </div>
            </div>
        </div>
  </div> 
  )
}

export default Pricing