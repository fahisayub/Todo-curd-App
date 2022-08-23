import { getdata, removeData, storeData } from '../../utils/sessionStorage';
import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  PROFILE_REQUEST,
  PROFILE_SUCCESS,
  PROFILE_FAILURE,
} from './actionTypes';
let token = getdata('authtoken');
const initstate = {
  isLoading: false,
  isError: false,
  isAuth: token ? true : false,
  token: token || '',
  uid:'',
  profileData: {},
};
export const authReducer = (state = initstate, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case SIGNUP_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case SIGNUP_SUCCESS: {
      storeData('authtoken', payload.authtoken);
      storeData('uid', payload.uid);      
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isError: false,
        token: getdata('authtoken'),
        uid: getdata('uid'),
      };
    }
    case SIGNUP_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, isAuth: false, isError: false };
    }
    case LOGIN_SUCCESS: {
      storeData('authtoken', payload.authtoken);
      storeData('uid', payload.uid);
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        isError: false,
        token: getdata('authtoken'),
        uid: getdata('uid'),
      };
    }
    case LOGIN_FAILURE: {
      return { ...state, isLoading: false, isAuth: false, isError: true };
    }

    case LOGOUT_REQUEST: {
      return { ...state, isLoading: true, isAuth: false, isError: false };
    }
    case LOGOUT_SUCCESS: {
      removeData('authtoken');
      removeData('uid');
      return {
        ...state,
        isLoading: false,
        isAuth: false,
        isError: false,
        token: '',
        uid:''
      };
    }
    case LOGOUT_FAILURE: {
      return { ...state, isLoading: false, isAuth: false, isError: true };
    }

    case PROFILE_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case PROFILE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        profileData:{...payload},
      };
    }
    case PROFILE_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
       
      };
    }
    default:
      return state;
  }
};
