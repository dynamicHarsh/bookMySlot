import React, { useEffect } from 'react'
import {Navigate} from 'react-router-dom'; 
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import { hideLoading, showLoading } from '../redux/features/alertSlice';
import { setUser } from '../redux/features/userSlice';
import Cookies from 'js-cookie';
export default function ProtectedRoute({children}){
  const dispatch=useDispatch();
  const {user}=useSelector(state=>state.user)

  const getUser= async()=>{
    try{
      dispatch(showLoading());
      const resp=await axios.post('user/getUserData')
      dispatch(hideLoading());
      if(resp.data.success){
        dispatch(setUser(resp.data.data))

      }
      else{
        <Navigate to='/login'/>
        sessionStorage.clear();
        Cookies.remove('login')
      }
    }
    catch(error){
      dispatch(hideLoading());
      sessionStorage.clear();
      Cookies.remove('login');
      console.log(error);
    }
  };

  useEffect(()=>{
    
    if(user==null){
      
      getUser()
    }
  },[user,getUser]);

  if(sessionStorage.getItem('token')){
    return children;
  }
  else{
    return <Navigate to='/login'/>;
  }
}


