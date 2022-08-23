import * as types from './actionTypes';
import {db} from '../../utils/firebase-config';
import {setDoc,doc, collection} from 'firebase/firestore'


export const addTaskApi=(payload)=>async(dispatch)=>{
   console.log(payload);
    dispatch({type:types.ADD_TASK_REQUEST})
 try{
    const docref= doc(collection(db,'tasks'));
    setDoc(docref,payload)
       dispatch({type:types.ADD_TASK_SUCCESS})
        
  

 }catch(e){
dispatch({type:types.ADD_TASK_FAILURE})
 }
    

}