import React,{useState} from 'react'
import Layout from '../components/Layout';
import {Col, Form,Input,Row, TimePicker,message,Select } from 'antd';
import { storage } from '../firebase';
import {ref, uploadBytes} from 'firebase/storage'
import axios from 'axios';
import {Link,useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';
import { speciality } from '../Data/speciality'
import "../styles/homeStyles.css";

const RegisterDoctor = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    const handleFinish=async (values)=>{
        try{
            dispatch(showLoading());
            axios.defaults.withCredentials = true;
            const res=await axios.post('https://bookmyslot-server.vercel.app/user/addDoctor',values);
            
            if(res.data.success){
                
                const imageRef=ref(storage,`image/${res.data.id}`);
                await uploadBytes(imageRef,selectedImage)
                dispatch(hideLoading())
                message.success('Doctor Registered Successfully')
            }
            else{
                message.error(res.data.message);
            }
        }
        catch(error){
            dispatch(hideLoading());
            console.log(error);
            message.error('Something went wrong');
        }
        
    }
    
  return (
    
    <Layout>
    <div className='doctorsRegForm'>
    <h2 className='text-center'>Register Doctor</h2>

        <Form className='doctor-form' layout='vertical' onFinish={handleFinish} >
    <h6 className='text-light'>Personal Details</h6>
    <Row gutter='20'>
        <Col xs={24} md={24} lg={8}>
            <Form.Item label="First Name" name="firstname" required rules={[{required: true}]}>
            <Input type='text' placeholder='Doctors First Name'/>
            </Form.Item>
        </Col>
        <Col xs={24} md={24} lg={8}>
        <Form.Item label="Last Name" name="lastname" required rules={[{required: true}]}>
            <Input type='text' placeholder='Doctors Last Name'/>
            </Form.Item>
        </Col>
    </Row>
    <Row gutter='20'>
    
        <Col xs={24} md={24} lg={8}>
        <Form.Item label="Contact" name="phone" required rules={[{required: true}]}>
            <Input type='text' placeholder='Doctors Phone no.'/>
            </Form.Item>
        </Col>
        <Col xs={24} md={24} lg={8}>
        <Form.Item label="Email Id" name="email" required rules={[{required: true}]}>
            <Input type='text' placeholder='Doctors Email Id'/>
            </Form.Item>
        </Col>
    </Row>
    <h6 className='text-light'>Professional Details</h6>
    <Row gutter='25' justify='center' align='center'>
    <Col xs={24} md={24} lg={8}>
        <Form.Item label="Specialization" name="speciality" required rules={[{required: true}]}>
        <Select
    showSearch
    placeholder="Select Specialization"
    optionFilterProp="children"
    filterOption={filterOption} 
    options={speciality}
  />
            </Form.Item>
        </Col>
        <Col xs={24} md={24} lg={8}>
        <Form.Item label="Fee per consultation" name="feePerC" required rules={[{required: true}]}>
            <Input type='text' placeholder='Doctors Fee per consultation(Rs.)'/>
            </Form.Item>
        </Col>
    <Col xs={24} md={24} lg={8}>
        <Form.Item label="Timings" name="timing" required rules={[{required: true}]}>
            <TimePicker.RangePicker format='HH:mm'/>
            </Form.Item>
        </Col>
        
    </Row>
    <h6 className='text-light'>Upload Image for Face Recognition</h6>
    {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button className='btn btn-danger' onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}
      
    <Row>
    <Col xs={24} md={24} lg={8}>
        <Form.Item name="img" required rules={[{required: true}]}>
        <input
        type="file"
        name="img"
        onChange={(event) => {
          setSelectedImage(event.target.files[0]);
        }}
      />
            </Form.Item>
        </Col>
    </Row>
    <div className="d-flex justify-content-center">
        <button className='btn btn-primary' type='submit'>Register</button>
    </div>
    </Form>
    
   
    
   </div>
    </Layout>
   
  )
}

export default RegisterDoctor