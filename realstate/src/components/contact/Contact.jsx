import './style.css';
import Swal from 'sweetalert2'
import { useState } from 'react';
function Contact(){

    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "45f546c7-6041-46d0-ad23-7d9bc6b5b14a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
        Swal.fire({
            title: "Message submitted successfully!",
            text: "Click 'OK' to confirm",
            icon: "success"
          });
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

    return(
        <div className="flex items-center justify-center flex-col gap-4 text-center">
            <div className='mt-20'>
                <h1 className="text-3xl md:text-4xl font-medium">Get <span className="text-blue-600">in</span> Touch</h1>
                <p className="text-gray-600 ">Let's Bulid Your Future Home</p>
            </div>
            <div className="shadow-2xl w-4/5 p-8 mt-10 rounded-md">
                <form onSubmit={onSubmit} >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
                    <div className="flex flex-col gap-1">
                       <label htmlFor="name">Name</label><br />
                       <input type="text" name="name" placeholder="Enter your full name" required className="p-3"/>
                    </div>
                  <div className="flex flex-col gap-1">
                     <label htmlFor="email">Email</label><br />
                     <input type="text" name="email" placeholder="Enter your email" required className="p-3"/>
                  </div>
                  </div>

                  <div className="flex flex-col gap-1 text-left mt-8">
                     <label htmlFor="message">Message</label>
                     <textarea name="message" id="" placeholder="Enter your message" required className="resize-none h-64 w-full p-3">
                        
                     </textarea>
                     <button type='submit' className='bg-blue-600 px-5 py-3 rounded-md mt-5 m-auto text-white font-medium hover:bg-blue-700'>Send Message</button>
                  </div>
                
                </form>
            </div>
        </div>
    )
}

export default Contact;