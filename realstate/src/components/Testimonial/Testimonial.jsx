import './style.css';
import { FaStar } from "react-icons/fa";
import {motion} from 'motion/react';
function Testimonial(){

    return(
        <motion.div initial={{opacity: 0, x: 200}} 
                    whileInView={{opacity: 1, x: 0}}
                    transition={{duration: 1.6}}
                    viewport={{once: true}}
                    className="flex items-center justify-center flex-col text-center" id='testimonial'>
             <div className='mt-20'>
                  <h1 className="text-3xl md:text-4xl font-medium">Customer <span className="text-blue-600">Testimonial</span></h1>
                  <p className="text-gray-600">Some Stories From Those Who Found Home <br /> with Us</p>
             </div>
             <div className="container flex flex-wrap justify-center m-auto p-10 gap-10">
             <div className="flex items-center justify-center flex-col p-6 shadow-xl rounded-md borderGray">
                <div className="h-16 w-2/4 rounded-full relative flex items-center justify-center mb-8">
                    <img src="./images/man1.jpg" alt=""  className="w-20 object-cover rounded-full"/>
                </div>
                    <h1 className="text-2xl font-medium">Brad Joe</h1>
                    <h2 className="text-gray-600 mb-3">Designer</h2>
                    <div className='flex gap-1 mb-3'>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                    </div>
                    <p>I can’t thank Metron Real Estate enough for their help in finding the perfect home for my family. Their friendly and honest advice made us feel confident throughout the process. They turned what could have been a stressful experience into an enjoyable one!</p>
             </div>
    
             <div className="flex items-center justify-center flex-col p-6 shadow-xl rounded-md borderGray">
                <div className="h-16 w-2/4 rounded-full relative flex items-center justify-center mb-8">
                    <img src="./images/man2.jpg" alt=""  className="w-20 object-cover rounded-full"/>
                </div>
                    <h1 className="text-2xl font-medium">Mattew Brock</h1>
                    <h2 className="text-gray-600 mb-3">Co-Founder</h2>
                    <div className='flex gap-1 mb-3'>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                    </div>
                    <p>From the moment we began our home search to the final closing, their team demonstrated exceptional professionalism, expertise, and dedication. They listened to our needs and guided us every step of the way, ensuring we found the perfect home for our family.</p>
             </div>
    
             <div className="flex items-center justify-center flex-col p-6 shadow-xl rounded-md borderGray">
                <div className="h-16 w-2/4 rounded-full relative flex items-center justify-center mb-8">
                    <img src="./images/man3.jpg" alt=""  className="w-20 object-cover rounded-full"/>
                </div>
                    <h1 className="text-2xl font-medium">Mark Rogan</h1>
                    <h2 className="text-gray-600 mb-3">Artist</h2>
                    <div className='flex gap-1 mb-3'>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                        <FaStar className='text-yellow-400'/>
                    </div>
                    <p>From the very first meeting, they understood my vision and helped me find the  perfect property. Their attention to detail and commitment to client satisfaction is unmatched.</p>
             </div>
    
          </div>
        </motion.div>
    )
}

export default Testimonial;