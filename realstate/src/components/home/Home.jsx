import './style.css';
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from 'motion/react';

function Home(){


    return(
        <div className='bg-photo' id='home'>
            <motion.div initial={{opacity: 0, y: 100}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.5}}
                        viewport={{once: true}} 
                        className='home-contents text-container flex flex-col items-start justify-center absolute gap-4 p-1'>
               <h1 className='text-white font-medium text-4xl md:text-5xl'>Bid your dream place</h1>
               <p className='text-white'>Efforlessly uncovering the perfect home to cultivate lasting family happiness.</p>
               <a href="#about"><button className='bg-white rounded-3xl text-sm font-medium px-5 py-2 flex items-center justify-center hover:bg-transparent border-2 hover:text-white border-white gap-1'>Explore Now  </button></a>
            </motion.div>


            <div className="rgb">
                
            </div>
        </div>
    )
}

export default Home;