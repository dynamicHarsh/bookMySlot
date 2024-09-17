import React, { useEffect, useRef } from 'react'
import axiosI from '../axios/axiosI';
import Layout from '../components/Layout';
import home from '../images/home.png'
import "../styles/homeStyles.css"
import { useSelector } from 'react-redux'
import image from '../images/bgimg.png'

const HomePage = () => {
  const { user } = useSelector(state => state.user)
  const getUserData = async () => {
    try {
      await axiosI.post('/user/getUserData');
    }
    catch (err) {
      console.log(err);
    }
  }

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      getUserData();
    }

  }, []);
  return (
    <Layout>
      <div className='bgimg'>
      <h2 className='text-center' style={{ padding: 20, color: 'white', fontSize: 40}}>Welcome {`${user?.name}`}</h2>
      <div className="cards">
        <div className='steps'>
          <div className='content'>
            <h4 style={{color:'white', fontSize:28, fontWeight:'bold', paddingTop:20, textAlign:"center"}}>Schedule Online Appointment</h4>
          </div></div>
        <div className='steps'>
          <div className='content'>
            <h4 style={{color:'white', fontWeight:'bold', fontSize:28, textAlign:"center", paddingTop:20}}>Book an Appointment</h4>
          </div></div>
        <div className='steps'>
          <div className='content'>
            <h4 style={{paddingTop:20, color: 'white', fontWeight:'bold', fontSize:28, textAlign:"center"}}>View Health Record</h4>
          </div></div>
      </div>
      </div>
    </Layout>
  )
}
export default HomePage