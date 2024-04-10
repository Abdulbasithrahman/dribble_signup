import React, { useEffect, useState } from 'react';
import upload from '../images/upload.png'
import { Link } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import { Avatar } from '../redux/actions/userActions';
import { Location } from '../redux/actions/userActions';

const Profile = () => {

  const users = useSelector((state)=>state)

  const username = users.User.userData
  
  const dispatch = useDispatch();
  const [avatar, setAvatar] = useState(null);
  const [location,setLocation] = useState(null)

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const avatarData = reader.result;
        setAvatar(avatarData);
        dispatch(Avatar(avatarData)); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handlelocation = (e)=>{
    dispatch(Location(e.target.value))
  }

  return (
    <>
    {(username == "" || username == null) ? null:(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Dribble logo */}
      <div className="absolute top-0 left-0 p-4">
      <h1 className='mx-10 my-5 text-pink-600 text-xl italic'>dribble</h1>
      </div>

      {/* Main content */}
      <div className="w-1/2 px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Welcome ! Let's create your profile</h1>
        <p className="mb-6">Let others get to know you better! You can do these later</p>

        <h3 className="text-lg mb-2 font-bold">Add an avatar</h3>
        <div className='flex my-10'>
        <div className='w-44 rounded-full'>
        {avatar? <img src={avatar} alt="Avatar" className="mb-4 w-44 h-44 rounded-full" />:<img  className="mb-4 w-44 h-44 rounded-full" src={upload}/>}
        </div>
        <div className='mt-8 mx-6'>
        <label htmlFor="avatarInput" className="border-2 p-2 mx-6 my-6 cursor-pointer">
            Choose Image
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </label>
        <p className="mx-6 mt-5"> Or choose one of our defaults</p>
        </div>
        </div >
        <h3 className="text-lg font-bold mb-2">Add your location</h3>
        <br></br>
        <input type="text" placeholder="Enter your location" onChange={handlelocation} className="border-b-2 p-2 mb-8 w-3/4" />
        <br></br>
        <Link to="/role">
        <button className="bg-pink-600 px-28 text-white py-2 rounded-md hover:bg-pink-700">Next</button>
        </Link>
      </div>
    </div>
  )}
    </>
  );
};

export default Profile;
