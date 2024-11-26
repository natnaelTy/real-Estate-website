import { useEffect, useState } from 'react';
import images from './image.json';
import './style.css';
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import {motion} from 'motion/react';


function Projects(){

    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardToShow, setCardToShow] = useState(1);

 
    function handlePrev(){
      setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
    }
    function handleNext(){
      setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
    }
    return(
        <motion.div initial={{opacity: 0, x: 100}}
                    whileInView={{opacity: 1, x:0}}
                    transition={{duration: 1.5}}
                    viewport={{once: true}}
                    className="text-center container mx-auto py-4 pt-4 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id='projects'>
            <div>
                <h1 className="text-3xl md:text-4xl font-medium">Completed <span className="text-blue-600">Projects</span></h1>
                <p className='text-gray-600'>Crafting Spaces, Building Legacies-Explore <br />
                Our Portfolio</p>
            </div>
            
            {/* projects slider function */}
            <div className='overflow-hidden mt-10'>
            <div className='flex gap-8 transition-transform duration-500 ease-in-out' style={{transform: `translateX(-${(currentSlide * 30) / cardToShow}%)`}}>
                {
                  images && images.length ? 
                  images.map((imageItem, index) => (
                    <div key={index} className='images-container relative'>
                        <img src={imageItem.image} alt="" className='images'/>
                        <div className='info-about absolute shadow-2xl bg-white px-5 py-2 gap-1 justify-center'>
                            <h1 className='font-medium text-lg'>{imageItem.location}</h1>
                            <p className='text-gray-700'>${imageItem.price}</p>
                        </div>
                    </div>
                  ))
                  : <h1>Loading..</h1>
                }
             </div>
           
           </div>
           <div className='arrows'>
                <FaChevronLeft className='left' onClick={handlePrev}/>
                <FaChevronRight className='right' onClick={handleNext}/>
           </div>
        </motion.div>
    )
}

export default Projects;