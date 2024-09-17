import React from "react";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { Card, Space, Input, Form, message } from "antd";
import axios from 'axios';
import userAvatar from '../images/user-avatar.avif';
const { Meta } = Card;

const ProfilePage = () => {
  const { user } = useSelector(state => state.user);
  

  const handleUserDetails= async (values)=> {
    
    try {
      console.log(values);
      const res = await axios.post('/user/profile',{_id: user.id,values});
      if (res.data.success) {
        
        message.success("Details Updated Successfully!");
        
        
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      message.error("Couldn't Update the Fields!");
    }
  }
  return (
    <>
      <Layout>
       <div className="profileDetails">
       <Space direction="horizontal" size={16}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                alt="avatar"
                src={userAvatar}
              />
              // have to take the images from firebase.
            }
          >
            <Meta title={user?.name.toUpperCase()} description={user?.email} />
          </Card>

          <Form onFinish={handleUserDetails}>
            <Form.Item label="Email" name='email'>
              <Input placeholder="Email" type="email" defaultValue={user?.email}/>
            </Form.Item>
            <Form.Item label="Phone"  name='phone'>
              <Input placeholder="Phone" type="text" defaultValue={user?.phone}/>
            </Form.Item>
            
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </Form>
        </Space>
       </div>
        
      </Layout>
    </>
  );
};

export default ProfilePage;
