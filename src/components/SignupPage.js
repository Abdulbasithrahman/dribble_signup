import React, { useDebugValue, useEffect, useState } from 'react';
import Background from '../images/signup-background.png'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { signUpSuccess,Role, Avatar, Location } from '../redux/actions/userActions';
import { signUpFailure } from '../redux/actions/userActions';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [username,setUsername] = useState(false)
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    termAndCond: false
  });

  const handleCheckboxChange = () => {
    setAgreeTerms(!agreeTerms);
  };
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        name: e.target.name.value,
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
        termAndCond: agreeTerms
      };

      setUser(newUser); // Set the user state with the form data

      // Make the API call to signup
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/signup',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : JSON.stringify(newUser)
      };
      
      axios.request(config)
      .then((response) => {
        dispatch(signUpSuccess(newUser));
        setUsername(false)
        console.log(JSON.stringify(response.data));
        navigate('/profile');
      })
      .catch((error) => {
        setUsername(true)
        console.error('Error signing up:', error);
      });
    } catch (error) {
      dispatch(signUpFailure(error.message));
    }
  };

  useEffect(() => {

    dispatch(signUpSuccess('')); 
    dispatch(Role(''));
    dispatch(Avatar(''));
    dispatch(Location(''));

  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <div className="w-full h-full">
        <div className="grid grid-cols-12 h-full bg-red-100">
          {/* Left Section */}
          <div className="col-span-5 p-8 ">
            <h1 className='mx-10 my-5 text-pink-600 text-xl italic'>dribble</h1>
            <h1 className='mx-10 my-5 text-orange-900 text-2xl italic'>Discover the world's top Designers & Creatives</h1>
            <img src={Background} alt='background' />
            <p className='mx-10 text-orange-900'>Art By <span className='underline'>Abdul Basith</span></p>
          </div>

          {/* Right Section */}
          <div className="col-span-7 bg-white p-8">
            <div className='float-right'>
              <p>Already a member ? <span className='underline text-indigo-500'>SignIn</span></p>
            </div>
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-lg">
              <div>
                <h1 className='text-xl font-bold'>Sign up to Dribble</h1>
                {username ? <h1 className='text-red-500'>username is already taken</h1>:null}
                <form className="mt-10 space-y-6" action="#" method="POST" onSubmit={handleSignUp}>
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Name
                      </label>
                      <div className="mt-2">
                        <input
                          id="name"
                          name="name"
                          type="name"
                          autoComplete="name"
                          placeholder='  John'
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900 ">
                        Username
                      </label>
                      <div className="mt-2">
                        <input
                          id="username"
                          name="username"
                          type="username"
                          autoComplete="username"
                          placeholder='  Bard'
                          required
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder='   account@refero.design'
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        placeholder='   6+ characters'
                        required
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
<div className="flex items-center">
            <input
              id="agreeTerms"
              name="agreeTerms"
              type="checkbox"
              checked={agreeTerms}
              onChange={handleCheckboxChange}
              className="h-4 w-4 text-pink-600 border-gray-300 focus:ring-pink-500"
            />
            <label htmlFor="agreeTerms" className="ml-2 block text-sm text-gray-900">
              Creating an account mean you're okay with our <span className='text-indigo-500'>Terms of Service, Privacy Policy</span>, and our default <span className='text-indigo-500'>Notication Settings</span>.
            </label>
          </div>
                  <div>
                    <button
                      type="submit"
                      className="flex justify-center rounded-md bg-pink-400 px-20 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                    >
                      Create Account
                    </button>
                  </div>
                </form>
                <div className='mt-10'>
              <label className='ml-2 block text-sm text-gray-900'>This site is protected by reCAPTCHA and the Google <span className='text-indigo-500'>Privacy Policy</span> and <span className='text-indigo-500'>Terms of Service</span> apply.</label>
              </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage; 
