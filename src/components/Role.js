import React, { useState } from 'react';
import designer from '../images/role_designer.png'
import hire from '../images/role_hire.png'
import user from '../images/role_user.png'
import { Link } from 'react-router-dom';
import { Role } from '../redux/actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';

const Roles = () => {

  const users = useSelector((state)=>state)

  const username = users.User.userData

  const [selectedRoles, setSelectedRoles] = useState([]);

  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedRoles((prevSelectedRoles) => [...prevSelectedRoles, value]);
    } else {
      setSelectedRoles((prevSelectedRoles) =>
        prevSelectedRoles.filter((role) => role !== value)
      );
    }
  };

  const handleFinishButtonClick = () => {
    const userData = users.User.userData;
    const avatar = users.Avatar.avatar;
    const location = users.Location.location;

    console.log(avatar)
  
    const data = new FormData();
    data.append('username', userData.username);
    data.append('emailId', userData.emailId);
    data.append('profileImage', avatar);
    data.append('role', selectedRoles);
    data.append('location', location);
  
    axios
      .put('http://localhost:8080/signup/role', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
    {(username == "" || username == null) ? null:(
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="absolute top-0 left-0 p-4">
      <h1 className='mx-10 my-5 text-pink-600 text-xl italic'>dribble</h1>
      </div>
      <div className='mb-10'>
        <h1 className='text-3xl font-bold mb-4 text-center'>What brings you to Dribble</h1>
        <p className='my-10 text-center'>Select the options that best describe you. Don't worry you can explore other options later.</p>
      </div>
      <div className="flex w-3/5 justify-between">
        {/* Card 1 */}
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg w-64">
          <img src={designer} alt="Image 1" className="w-48 h-36 mb-4 rounded-full" />
          <p className="text-center font-bold">I'm a designer looking to share my work</p>
          <p className="text-center hidden">Description 1</p>
          <input type="checkbox" className="mt-4" value="designer" onChange={handleCheckboxChange} />
        </div>
        
        {/* Card 2 */}
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg w-64">
          <img src={hire} alt="Image 2" className="w-48 h-36 mb-4 rounded-full" />
          <p className="text-center font-bold">I'm looking to hire a designer</p>
          <p className="text-center hidden">Description 2</p>
          <input type="checkbox" className="mt-4" value="hire" onChange={handleCheckboxChange} />
        </div>
        
        {/* Card 3 */}
        <div className="flex flex-col items-center p-4 border border-gray-300 rounded-lg w-64">
          <img src={user} alt="Image 3" className="w-48 h-36 mb-4 rounded-full" />
          <p className="text-center font-bold">I'm looking for design inspiration</p>
          <p className="text-center hidden">Description 3</p>
          <input type="checkbox" className="mt-4" value="user" onChange={handleCheckboxChange} />
        </div>
      </div>
      <h1 className='mt-12 font-bold'>Anything else? You can select multiple</h1>
      <Link to="/email/confirmation">
        <button onClick={handleFinishButtonClick} className="bg-pink-600 mt-8 px-28 text-white py-2 rounded-md hover:bg-pink-700">Finish</button>
        </Link>
      </div>
     )}
    </>
  )
}

export default Roles