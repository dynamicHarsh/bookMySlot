import React,{useEffect,useRef} from 'react'
import axios from 'axios';
import Layout from '../components/Layout';
import home from '../images/home.png'
import "../styles/homeStyles.css"
import {useSelector} from 'react-redux'

const HomePage = () => {
  const {user}= useSelector(state=>state.user)
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
    <h2 className='text-center' style={{padding:10, color: 'white'}}>Welcome {`${user?.name}`}</h2>
    <div className="illustration">
    <img src={home} alt="Home Illustration" />
    </div>
    
    
    
    </Layout>
  )
}

export default HomePage