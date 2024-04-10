// userReducer.js
import { SIGN_UP } from "../actions/userActionTypes";

const initialState = {
  userData: null,
  error: null,
};

export const signUp = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP.SIGNUP_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null,
      };

    case SIGN_UP.SIGNUP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};



const initialState2 = {
  avatar: null,
  // other state properties
};

export const userReducer = (state = initialState2, action) => {
  switch (action.type) {
    case SIGN_UP.AVATAR:
      return {
        ...state,
        avatar: action.payload,
      };
    default:
      return state;
  }
};

const initialState3 = {
  location: null,
  // other state properties
};

export const location = (state = initialState3, action) => {
  switch (action.type) {
    case SIGN_UP.LOCATION:
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

const initialState4 = {
  role: null,
};

export const role = (state = initialState4, action) => {
  switch (action.type) {
    case SIGN_UP.ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};




