import './style.css';
import { motion } from 'motion/react';

function About(){
    return(
        <motion.div initial={{opacity: 0, y:100}}
                    transition={{duration: 1.5}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{once: true}}
                    className="flex items-center justify-center flex-col text-center container mx-auto overflow-hidden" id='about'>
            <div className="mt-4 mb-4">
                <h1 className="md:text-4xl text-3xl font-medium"><span className="text-blue-600">About</span> us</h1>
                <p className="text-gray-600 text-sm font-medium">Passionate About Properties, <br />Dedicated to Your Vision</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-around p-4 gap-8 w-full overflow-hidden">
               <div className="image-container ">
                  <img src="./images/aboutHouse2.jpg" alt="" className="image" />
               </div>
               <div className="flex flex-col items-center lg:items-start text-left justify-center p-2">

                <div className="grid grid-cols-2 gap-3 mb-2 text-center lg:text-left">
                   <div>
                        <h1 className="text-3xl font-medium">9+</h1>
                        <p className="text-gray-600">Year of Excellence</p>
                   </div>
                   <div>
                        <h1 className="text-3xl font-medium">14+</h1>
                        <p className="text-gray-600">Projects Completed</p>
                   </div>
                   <div>
                        <h1 className="text-3xl font-medium">20+</h1>
                        <p className="text-gray-600">Mn. Sq. Ft. Delivered</p>
                   </div>
                   <div>
                        <h1 className="text-3xl font-medium">25+</h1>
                        <p className="text-gray-600">Ongoing Projects</p>
                   </div>
                </div>  
                <div className="text-center lg:text-left">
                    <p className="text-gray-700 my-4 max-w-lg">we are committed to transforming your real estate goals into reality. Whether you’re buying your dream home, selling a property, or exploring investment opportunities, our team of experienced professionals is here to guide you every step of the way. With in-depth market knowledge, personalized service, and a customer-first approach, we deliver solutions tailored to your unique needs. From finding the perfect neighborhood to negotiating the best deals, we build lasting relationships and help you secure a future you can be proud of</p>
                    <a href="#projects"><button className="bg-blue-600 hover:bg-blue-700 px-5 p-3 rounded-md text-white font-medium m-auto">Learn more</button></a>
                </div>
               </div>
            </div>
        </motion.div>
    )
}

export default About;