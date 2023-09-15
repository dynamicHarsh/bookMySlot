import React,{useEffect,useRef} from 'react'
import axios from 'axios';
import Layout from '../components/Layout';

const HomePage = () => {

  const getUserData= async ()=>{
    try{
      await axios.post('/user/getUserData');
    }
    catch(err){
      console.log(err);
    }
  }

  const initialized=useRef(false);

  useEffect(()=>{
    if(!initialized.current){
      initialized.current=true;
      getUserData();
    }
    
  },[]);
  return (
    <Layout>
    <h1>Home Page</h1>
    </Layout>
  )
}

export default HomePage