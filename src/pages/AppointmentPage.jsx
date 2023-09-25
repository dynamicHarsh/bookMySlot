import React, {useEffect,useRef,useState} from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {message,Table} from 'antd'




const AppointmentPage = () => {
    const [appointments,setAppointments]=useState([]);
    const [admin,setAdmin]=useState(false);
    const {user}=useSelector(state=>state.user)
    
    const getAppointment= async ()=>{
        try{
        
         const res= await axios.post('/user/appointments',user);
         if(res.data.success){
          setAppointments(res.data.app);
          console.log(appointments);
          setAdmin(user.isAdmin)
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
          getAppointment();
        }
        
      },[]);
      let columns;
      if(admin){
        columns=[
          {
            title: 'Appointment_ID',
            dataIndex: '_id',
            key: '_id',
          },
          {
            title: 'Patients Name',
            dataIndex: 'patientName',
            key: 'patientName'
          },
          {
            title: 'Slot',
            dataIndex: 'slot',
            key: 'slot',
          },
          {
            title: 'Doctors Name',
            dataIndex: 'doctorName',
            key: 'doctorName',
          },
          {
            title: 'Speciality',
            dataIndex: 'speciality',
            key: 'speciality',
          },
          {
            title: 'Contact',
            dataIndex: 'phone',
            key: 'phone',
          },
          {
            title: 'Concern',
            dataIndex: 'concern',
            key: 'concern'
          },
          
      ]
    }
    else{
      columns=[
        {
          title: 'Appointment_ID',
          dataIndex: '_id',
          key: '_id',
        },
        
        {
          title: 'Slot',
          dataIndex: 'slot',
          key: 'slot',
        },
        {
          title: 'Doctors Name',
          dataIndex: 'doctorName',
          key: 'doctorName',
        },
        {
          title: 'Speciality',
          dataIndex: 'speciality',
          key: 'speciality',
        },
        {
          title: 'Contact',
          dataIndex: 'phone',
          key: 'phone',
        },
        
    ]
  }
       
    
      
      
  return (
    <Layout>
    <div style={{padding: 20}}>
    <Table dataSource={appointments} columns={columns} />
    </div>
    </Layout>
    
  )
}

export default AppointmentPage