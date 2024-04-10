import React from 'react'
import email from '../images/email.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faInstagram,faPinterest } from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from "react-redux";

const Confirmation = () => {


  const users = useSelector((state)=>state)

  console.log(users)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <nav className="p-4 flex justify-between items-center border">
      <div className="flex items-center">
        <p className="mr-4 text-pink-600 font-bold">dribble</p>
        <p className="mr-4">Inspiration</p>
        <p className="mr-4">Find work</p>
        <p className="mr-4">Learn Design</p>
        <p className="mr-4">Go Pro</p>
        <p className="mr-4">Hire Designers</p>
      </div>
      <div className='flex w-1/4 justify-between items-center'>
        <input type="text" placeholder="Search" className="px-2 py-2 rounded-md border mr-2 focus:outline-none" />
        <img src="/path/to/logo.png" alt="Logo" className="h-8 mr-4" />
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Upload</button>
      </div>
    </nav>

      {/* Email Confirmation */}
      <div className="flex flex-col items-center justify-center my-8">
        <h1 className="text-3xl font-bold mb-4">Please verify your email...</h1>
        <img src={email} className='w-36 h-32' />
        <p className="text-gray-600 mb-4">Please verify your email address. We've sent a confirmation email to:</p>
        <p className='font-bold mb-4'>account@refero.design</p>
        <p className="text-gray-600 mb-4 w-1/2 text-center">Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span className='text-pink-600'>resend the confimation email</span></p>
        <p className='text-gray-600 mb-4'>Wrong email address? <span className='text-pink-600'>Change it</span></p>
      </div>

      {/* Footer */}
      <footer className="flex justify-around text-gray-500 bg-gray-50 h-72">
        <div className='w-2/12'>
            <p className='text-pink-600 mb-4'>dribble</p>
            <p className='mb-4'>Driblle is the world's leading community for creatives to share, grow and get hired.</p>
        <div className='flex text-black'>
        <FontAwesomeIcon icon={faFacebook} className="text-2xl mx-2" />
        <FontAwesomeIcon icon={faYoutube} className="text-2xl mx-2" />
        <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2" />
        <FontAwesomeIcon icon={faPinterest} className="text-2xl mx-2" />
         </div>
        </div>
        <div>
            <h1 className='text-black font-bold mb-2'>For designers</h1>
            <p className='mb-2'>Go Pro!</p>
            <p className='mb-2'>Design blog</p>
            <p className='mb-2'>Go Pro!</p>
            <p className='mb-2'>Design blog</p>
            <p className='mb-2'>Go Pro!</p>
            <p className='mb-2'>Design blog</p>
            <p className='mb-2'>Go Pro!</p>
            <p className='mb-2'>Design blog</p>
        </div>
        <div>
            <h1 className='text-black font-bold mb-2'>Hire designers</h1>
            <p className='mb-2'>Post a job opening</p>
            <p className='mb-2'>Post a freelance project</p>
            <p className='mb-2'>Search for designers</p>
        </div>
        <div>
            <h1 className='text-black font-bold mb-2'>Company</h1>
            <p className='mb-2'>About</p>
            <p className='mb-2'>Careers</p>
            <p className='mb-2'>Support</p>
            <p className='mb-2'>Media kit</p>
            <p className='mb-2'>About</p>
            <p className='mb-2'>Careers</p>
            <p className='mb-2'>Support</p>
            <p className='mb-2'>Media kit</p>
        </div>
        <div>
            <h1 className='text-black font-bold mb-2'>Directories</h1>
            <p className='mb-2'>Design jobs</p>
            <p className='mb-2'>Designers for hire</p>
            <p className='mb-2'>Freelance designers for hire</p>
            <p className='mb-2'>Tags</p>
            <p className='mb-2'>Places</p>
        </div>
        <div>
            <h1 className='text-black font-bold mb-2'>Design Resources</h1>
            <p className='mb-2'>Freelancing</p>
            <p className='mb-2'>Design Hiring</p>
            <p className='mb-2'>Desing Portfolio</p>
            <p className='mb-2'>Freelancing</p>
            <p className='mb-2'>Design Hiring</p>
            <p className='mb-2'>Desing Portfolio</p>
        </div>
      </footer>
    </div>
  );
};

export default Confirmation