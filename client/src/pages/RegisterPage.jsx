import React from 'react'
import { Form, Input,message} from 'antd';
import '../styles/registerStyles.css';
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';
const RegisterPage = () => {

    const navigate=useNavigate();
    const dispatch=useDispatch();
    const onFinishHandler = async (values)=>{
        try{
        dispatch(showLoading());
        const res=await axios.post('/user/register',values);
        dispatch(hideLoading());
        if(res.data.success){
            message.success('Registered Successfully');
            navigate('/login');
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
    <>
        <div className="bg"></div>
    <div className='form-container'>
    <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
    <h1 className='text-center'>Register</h1>
    <Form.Item label='Name' name='name'>
        <Input type='text' required/>
    </Form.Item>
    <Form.Item label='Email' name='email'>
        <Input type='email' required/>
    </Form.Item>
    <Form.Item label='Password' name='password'>
        <Input type='password' required/>
    </Form.Item>
    <div className="register-buttons">
    <Link to='/login' >Already a user?</Link>
    <button className='btn btn-primary' type='submit'>Register</button>
    </div>
    
    

    </Form>
        
    </div>
    </>
  )
}
  

export default RegisterPage