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
import {signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut}  from 'firebase/auth';
import {doc,getDoc,setDoc}from 'firebase/firestore'
import {auth,db} from '../../utils/firebase-config';

//REGISTER API
export const registerApi = (payload)=>(dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
 console.log(payload)
  createUserWithEmailAndPassword(auth,payload.email,payload.password)
    .then((res) => {
     dispatch({ type: SIGNUP_SUCCESS, payload:{authtoken:res._tokenResponse.refreshToken,uid:res.user.uid }});
     dispatch(setProfile(res.user.uid,payload))
      console.log(res.user.uid);

    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAILURE});
      console.log(err);
    });
};


//LOGIN API
export const loginApi = payload => dispatch => {
  console.log(payload)
  dispatch({ type: LOGIN_REQUEST });
  signInWithEmailAndPassword(auth,payload.email,payload.password)
    .then((res) => {
      dispatch(getProfileApi(res.user.uid));
      dispatch({ type: LOGIN_SUCCESS, payload:{authtoken:res._tokenResponse.refreshToken,uid:res.user.uid } });
      console.log(res);
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE });
      console.log(err);
    });
};

//LOGOUT API
export const logoutApi = () => dispatch => {
  dispatch({ type: LOGOUT_REQUEST });
  signOut(auth).then((res)=>{
    dispatch({ type: LOGOUT_SUCCESS});
  }).catch(err=>{
    dispatch({ type: LOGOUT_FAILURE });
  })
}


//SET PROFILE API
export const setProfile=(uid,userdata)=>async(dispatch)=>{
  dispatch({type:PROFILE_REQUEST});
  try{
    const  docref=doc(db,'profile',uid);
    await  setDoc(docref,userdata);
    dispatch({ type: PROFILE_SUCCESS });
    dispatch(getProfileApi(uid));
  }catch(err){
    dispatch({ type: PROFILE_FAILURE});
  }
  
}
 


// GET PROFILE API
export const getProfileApi = (payload)=>async(dispatch) => {
  dispatch({ type: PROFILE_REQUEST });
  const docref=doc(db,'profile',payload);
  const docSnap = await getDoc(docref);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
   dispatch({ type: PROFILE_SUCCESS, payload: docSnap.data() });
} else {
  // doc.data() will be undefined in this case
  dispatch({ type: PROFILE_FAILURE });
  console.log("No such document!");
}

  
};
