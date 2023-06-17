
import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import { Link, animateScroll as scroll } from 'react-scroll'


const NavBar = () => {
        const [nav, setNav] = useState(false)
        const handleClick = () => setNav(!nav)
        const handleClose =()=> setNav (!nav)

  return (
    <div className="w-screen h-[80px] z-10 text-blue-600 bg-rose-100 fixed drop-shadow-xl mb-4">
        <div className="px-2 flex justify-between items-center w-full h-full">
            <div className=" flex items-center">
                <h1 className=" text-3xl font-bold mr-4 sm:text-4xl m-3">
                    ALEX GREY
                </h1>
                    <ul className="hidden md:flex z-[9999]">
                        <li><Link activeClass="active" to="Home" smooth={true} offset={-50} duration={500}>Home</Link></li>
                        <li><Link activeClass="active" to="About" smooth={true} offset={-50} duration={500}>About</Link></li> 
                        <li><Link activeClass="active" to="Connect" smooth={true} offset={-100} duration={500}>Connect</Link></li> 
                        <li><Link activeClass="active" to="Gallery" smooth={true} offset={-100} duration={500}>Gallery</Link></li> 
                       {/* <li><Link activeClass="active" to="Pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li> */}

                    </ul>
            </div>
            <div className="hidden md:flex pr-4">
                
                <button className=' p-1'>NewsLetter</button>
            </div>
            <div className="md:hidden bg-rose-100" onClick={handleClick}>
                {nav ? <RxCross1 className=" w-7 h-7 m-3" /> : <GiHamburgerMenu className=" w-7 h-7 m-3" /> }
            </div>
        </div>
                    <ul className={!nav ? "hidden z-[99999]" : "absolute bg-rose-100 w-full px-8 z-[9999]"}>
                       
                    <li><Link activeClass="active" to="Home" smooth={true} offset={-50} duration={500}>Home</Link></li>
                        <li className=" border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="About" smooth={true} offset={-150} duration={500}>About</Link></li> 
                        <li className=" border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="Connect" smooth={true} offset={-100} duration={500}>Connect</Link></li> 
                        <li className=" border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="Gallery" smooth={true} offset={-100} duration={500}>Gallery</Link></li> 
                      {/*  <li className=" border-b-2 border-zinc-300 w-full"><Link onClick={handleClose} activeClass="active" to="Pricing" smooth={true} offset={50} duration={500}>Pricing</Link></li> */}

                        
                        <div className=" flex flex-col my-4">
                            <button className="px-8 py-3">NewsLetter</button>
                        </div>
                    </ul>
    </div>
  )
}

export default NavBar

/*  <RxCross1 className=" w-7 h-7 m-3" />

<GiHamburgerMenu className=" w-7 h-7 m-3" />  */