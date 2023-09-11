import React from 'react'
import { Form, Input, message} from 'antd';
import axios from 'axios';
import {useDispatch} from 'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';
import '../styles/registerStyles.css';
import {Link,useNavigate} from 'react-router-dom'


const LoginPage = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
    const onFinishHandler=async (values)=>{
      try{
        dispatch(showLoading());
        const res=await axios.post('/user/login',values);
        dispatch(hideLoading());
        if(res.data.success){
            sessionStorage.setItem('token',res.data.token);
            message.success('Logged In Successfully');
            navigate('/');
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
    <h1 className='text-center'>Login</h1>
    <Form.Item label='Email' name='email'>
        <Input type='email' required/>
    </Form.Item>
    <Form.Item label='Password' name='password'>
        <Input type='password' required/>
    </Form.Item>
    <div className="register-buttons">
    <Link to='/register'>Don't have an account?</Link>
    <button className='btn btn-primary' type='submit'>Login</button>
    </div>
    </Form>
    </div>
    </>
    
  )
}

export default LoginPage