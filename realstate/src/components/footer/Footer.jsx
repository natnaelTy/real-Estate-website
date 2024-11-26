import './style.css';

function Footer(){

    return(
        <div className='bg-gray-900 text-white mt-20 w-full overflow-hidden'>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-start w-full p-10 gap-8">
               <div className="flex flex-col gap-3">
                <div className='relative w-16 h-10'>
                    <img src="./images/MetronLogo.png" alt="" className='object-contain w-full h-10' />
                </div>
                  <h1 className="text-2xl font-medium">Metron Real Estate</h1>
                  <p>Efforlessly uncovering the perfect <br /> home to cultivate lasting happiness.</p>
               </div>
               <div className="flex flex-col gap-3">
                   <h1 className="text-2xl font-medium">Usefull links</h1>
                   <ul>
                       <li className="hover:text-gray-600"><a href="#home">Home</a></li>
                       <li className="hover:text-gray-600"><a href="#about">About us</a></li>
                       <li className="hover:text-gray-600"><a href="#projects">Projects</a></li>
                       <li className="hover:text-gray-600"><a href="#testimonial">Testimonial</a></li>
                       <li className="hover:text-gray-600"><a href="">Privacy policy</a></li>
                   </ul>
               </div>
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-medium">Subscribe to our newsletter</h1>
                  <p>The latest news, articles, and resources,<br /> sent to your inbox weekly.</p>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Enter your email" className="p-2 text-sm w-64 bg-gray-800 border-none outline-none" />
                    <button className="bg-blue-700 hover:bg-blue-800 px-5 py-2 rounded-md m-auto text-white">Subscribe</button>
                  </div>
               </div>  
            </div>
            <div className="copyrightline">Copyright 2024 © Metron. All Right Reserved.</div>
        </div>
    )
}

export default Footer;