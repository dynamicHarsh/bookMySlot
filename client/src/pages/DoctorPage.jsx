import React, { useState, useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import {Table} from 'antd';
const DoctorPage = () => {
  const [doctors,setDoctors]=useState([]);
  

  const getDoctors=async ()=>{
    try{
      const res=await axios.get('/user/getDoctors');
      if(res.data.success){
        
        setDoctors(res.data.doctors);
        console.log('inside getDoctors',res);
        
      }
    }
    catch(err){
      console.log(err.message);
    }
  }
  
  const initialized = useRef(false);
      useEffect(()=>{
        if(!initialized.current){
          initialized.current = true
          getDoctors();
        }
        
      },[]);


  const columns=[
    {
      title: 'FName',
      dataIndex: 'firstname',
      key: 'firstname',
    },
    {
      title: 'LName',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Speciality',
      dataIndex: 'speciality',
      key: 'speciality',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    
    // {
    //   title: 'Shift',
    //   dataIndex: 'timing',
    //   key: 'timing',
      
    // },
    
    {
      title: 'Fees',
      dataIndex: 'feePerC',
      key: 'feePerC',
    },
    {
      title: 'Present',
      dataIndex: 'present',
      key: 'present',
      render : (text) => String(text),
    },
    
    {
      title: 'Queue',
      dataIndex: 'inLine',
      key: 'inLine',
    },
  ]

  return (
    <Layout>
    <div style={{padding: 20}}>
    <Table dataSource={doctors} columns={columns}/>
    </div>
    </Layout>
    
  )
}

export default DoctorPage