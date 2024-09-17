import React, {useEffect,useRef,useState} from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux'
import {message,Table,Pagination} from 'antd'






const AppointmentPage = () => {
    const [appointments,setAppointments]=useState([]);
    const [role,setRole]=useState('user');
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5; 
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const slicedData = appointments.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
    const {user}=useSelector(state=>state.user)
    
    const getAppointment= async ()=>{
        try{
        
         const res= await axios.post('/user/appointments',user);
         if(res.data.success){
          const upadatedRes=res.data.app.map(({
            _id: key,
            ...rest
          }) => ({
            key,
            ...rest
          }));
          setAppointments(upadatedRes);
          
          // console.log(appointments);
          setRole(user.role)
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
      if(role=='admin'){
        columns=[
          {
            title: 'Appointment_ID',
            dataIndex: 'key',
            key: 'key',
            width: '10rem',
            render: (text)=> "XXX"+String(text).substring(14)
          },
          {
            title: 'Patients Name',
            dataIndex: 'patientName',
            key: 'patientName',
            width: '10rem'
          },
          {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text)=>(text==="waiting")?<span className='bg-warning text-dark'>Waiting</span>:((text==="seen")?<span className='bg-primary text-white'>Seen</span>:<span className='bg-success text-white'>Alloted</span>)
          },
          {
            title: 'Estimated Slot',
            dataIndex: 'slot',
            key: 'slot',
            width: '10rem',
            render: (text)=> text?String(text).substring(0,25):"---"
          },
          
          {
            title: 'Doctors Name',
            dataIndex: 'doctorName',
            key: 'doctorName',
            width: '10rem',
            render: (text)=> text?text:"----"
            
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
            render: (text)=>text?text:"----"
          },
          
          
      ]
    }
    else if(role=='doctor'){
      columns=[
        {
          title: 'Appointment_ID',
          dataIndex: 'key',
          key: 'key',
          width: '10rem',
          render: (text)=> "XXX"+String(text).substring(14)
        },
        {
          title: 'Patients Name',
          dataIndex: 'patientName',
          key: 'patientName',
          width: '10rem'
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (text)=>(text==="waiting")?<span className='bg-warning text-dark'>Waiting</span>:((text==="seen")?<span className='bg-primary text-white'>Seen</span>:<span className='bg-success text-white'>Alloted</span>)
        },
        {
          title: 'Estimated Slot',
          dataIndex: 'slot',
          key: 'slot',
         
          render: (text)=> text?String(text).substring(0,25):"---"
        },
        
        
        
    ]
    }
    else{
      columns=[
        {
          title: 'Appointment_ID',
            dataIndex: 'key',
            key: 'key',
            width: '10rem',
            render: (text)=> "XXX"+String(text).substring(14)
        },
        {
          title: 'Status',
          dataIndex: 'status',
          key: 'status',
          render: (text)=>(text==="waiting")?<span className='bg-warning text-dark'>Waiting</span>:((text==="seen")?<span className='bg-primary text-white'>Seen</span>:<span className='bg-success text-white'>Alloted</span>)
        },
        {
          title: 'Slot',
            dataIndex: 'slot',
            key: 'slot',
            width: '10rem',
            render: (text)=> text?String(text).substring(0,25):"---"
        },
        {
          title: 'Doctors Name',
          dataIndex: 'doctorName',
          key: 'doctorName',
          render: (text)=> text?text:"----"
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
          render: (text)=>text?text:"----"
        },
        
    ]
  }
       
    
      
      
  return (
    <Layout>
    <div style={{padding: 20}}>
    <Table columns={columns} 
     
    expandable={{
        expandedRowRender: (record)=>(
          <p
          style={{
            margin: 0,
          }}
        ><span style={{fontWeight: 'bold'}}>Concern: </span>
          {record.concern}
        </p>
        ),
        
      }} dataSource={slicedData} pagination={false}
    />
    <Pagination
        current={currentPage}
        total={appointments.length}
        pageSize={pageSize}
        onChange={handleChangePage}
        showSizeChanger={false} // Hide page size changer
      />
    </div>
    </Layout>
    
  )
}

export default AppointmentPage