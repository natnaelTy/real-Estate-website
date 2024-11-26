import { SlMenu } from "react-icons/sl";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
import {motion} from 'motion/react';

function NavBar(){

    const [showMenu, setShowMenu] = useState(false);

    function handleShowMenu(){
        setShowMenu(!showMenu);
    }
    return(
        <div>
            <nav className="bg-transparent absolute z-10 flex items-center justify-between md:justify-around w-full p-3">
                <div className="logo text-white flex items-center justify-center ">
                    <div className="relative w-16 h-10">
                        <img src="./images/MetronLogo.png" alt="" className="object-cover w-full"/>
                    </div>
                    <h1 className="text-xl font-medium">Metron Real Estate</h1>
                </div>
                <ul className="hidden md:flex gap-8 text-white font-medium">
                    <li className="hover:text-gray-300"><a href="#home">Home</a></li>
                    <li className="hover:text-gray-300"><a href="#about">About</a></li>
                    <li className="hover:text-gray-300"><a href="#projects">Projects</a></li>
                    <li className="hover:text-gray-300"><a href="#testimonial">Testimonials</a></li>
                </ul>
                <div className="hidden md:flex">
                   <button className="bg-white rounded-3xl text-center hover:bg-transparent border-2 hover:text-white border-white text-sm font-medium px-6 py-2 cursor-pointer ">Sign up</button>
                </div>
                <button onClick={handleShowMenu} className="flex md:hidden text-white text-2xl p-1">
                    {
                        showMenu ? <LiaTimesSolid/> : <SlMenu/>
                    }
                </button>

                {
                showMenu ? 
                <motion.div initial={{x : 100}}
                            whileInView={{x : 0}}
                            exit={{x : 100}}
                            transition={{duration: 0.5}}
                            viewport={{once: true}}
                            className="menu md:hidden transition-all bg-white fixed w-full h-full text-black top-0 right-0 bottom-0 overflow-hidden">
                    <div className="flex justify-end p-3 text-3xl">
                        <button onClick={handleShowMenu}>{<LiaTimesSolid/>}</button>
                    </div>
                    <ul onClick={handleShowMenu}className="font-medium flex items-center justify-center gap-3 flex-col mt-10">
                    <li className="hover:text-blue-700"><a href="#home">Home</a></li>
                    <li className="hover:text-blue-700"><a href="#about">About</a></li>
                    <li className="hover:text-blue-700"><a href="#projects">Projects</a></li>
                    <li className="hover:text-blue-700"><a href="#testimonial">Testimonials</a></li>
                </ul>
                </motion.div>
                : null
            }
            </nav>
     
        </div>
    )
}

export default NavBar;