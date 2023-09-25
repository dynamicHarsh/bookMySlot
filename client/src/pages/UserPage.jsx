import React,{useState,useEffect,useRef} from 'react'
import Layout from '../components/Layout'
import axios from 'axios';
import {Table,Pagination} from 'antd';

const UserPage = () => {
  const[users,setUsers]=useState([]);
  const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 5; 
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const slicedData = users.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );
  const getUsers=async ()=>{
    try{
      const res=await axios.get('/user/getUsers');
      if(res.data.success){
        
        setUsers(res.data.users);
        
        
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
          getUsers();
        }
        
      },[]);


  const columns=[
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    }    
  ]

  return (
    <Layout>
    <div style={{padding: 20}}>
    <Table dataSource={slicedData} columns={columns} pagination={false}/>
    <Pagination
        current={currentPage}
        total={users.length}
        pageSize={pageSize}
        onChange={handleChangePage}
        showSizeChanger={false} // Hide page size changer
      />
    </div>
    </Layout>
    
  )
}

export default UserPage