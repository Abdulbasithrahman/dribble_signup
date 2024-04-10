// userActions
import { SIGN_UP } from "./userActionTypes";

export const signUpSuccess = (userData) => {
   return {
    type: SIGN_UP.SIGNUP_SUCCESS,
    payload: userData,
   }
}
  
export const signUpFailure = (error) => {
 return{
  type: SIGN_UP.SIGNUP_FAILURE,
  payload: error,
  }
};

export const Avatar = (avatar) => ({
   type: SIGN_UP.AVATAR,
   payload: avatar,
 });

 export const Location = (location) => ({
   type: SIGN_UP.LOCATION,
   payload: location,
 });

 export const Role = (role) => ({
  type: SIGN_UP.ROLE,
  payload: role,
});


