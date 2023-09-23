import React from 'react'
import Layout from '../components/Layout'
import {Col,Form,Input,Row,message,Select, DatePicker} from 'antd'
import axios from 'axios'
import { speciality } from '../Data/speciality'
import {useSelector, useDispatch} from 'react-redux'
import { showLoading,hideLoading } from '../redux/features/alertSlice';
const Booking = () => {

  const {user}=useSelector(state=>state.user)
  const dispatch=useDispatch();




    const handleFinish=async (values)=>{
        try{
          values.advDate=values.advDate.toISOString();
          dispatch(showLoading());
          const data={speciality: values.speciality,concern: values.concern,patientId: user.id,patientName: user.name,date: values.advDate};
          const res=await axios.post('/user/book',data)
          if(res.data.success){
            dispatch(hideLoading())
            message.success(res.data.message)
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




    const filterOption = (input, option) =>
  (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  return (
    <Layout>
    <h1 className='text-center'>Get Appointment</h1>
    <Form layout='vertical'  onFinish={handleFinish}>
    <Row className='d-flex justify-content-center text-center mt-3'>
        <Col xs={24} md={24} lg={8}>
        <Form.Item label="Specialization" name="speciality" required rules={[{required: true}]}>
        <Select
    showSearch
    placeholder="Select Specialization"
    optionFilterProp="children"
    filterOption={filterOption} style={{
        width: 170,
      }}
    options={speciality}
  />
        </Form.Item>
        
        </Col>
        
    </Row>
    <Row className='d-flex justify-content-center text-center'>
      <Col xs={24} md={24} lg={8}>
        <Form.Item label="Date" name="advDate" required="true">
          <DatePicker />
        </Form.Item>
      </Col>
    </Row>
    <Row className='d-flex justify-content-center text-center'>
    <Col xs={24} md={24} lg={8}>
    <Form.Item label="Ellaborate your Concern" name="concern" required rules={[{required: true}]}>
    <Input.TextArea rows={4} placeholder="Enter your Concern" maxLength={100} />
    </Form.Item>
        
        </Col>
    </Row>
    <div className="d-flex justify-content-center">
        <button className='btn btn-primary' type='submit'>Book</button>
    </div>
    </Form>
    </Layout>
    
  )
}

export default Booking