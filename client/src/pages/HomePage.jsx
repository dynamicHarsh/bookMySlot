import React,{useEffect} from 'react'
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


  useEffect(()=>{
    getUserData();
  },[]);
  return (
    <Layout>
    <h1>Home Page</h1>
    </Layout>
  )
}

export default HomePage