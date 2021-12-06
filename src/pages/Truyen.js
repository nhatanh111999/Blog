import React, { useEffect, useState } from 'react';

import { message, Button, InputNumber, notification, Form, Input } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos } from '../reducers/todosSlice';






function Truyen() {
  const dispatch = useDispatch();
  const list=useSelector(state => state.todos)
  const [user,setUser]=useState([]);
  const axios = require('axios');


  useEffect(()=>{
    axios.get('https://reqres.in/api/users')
    .then(res => {
      const user=res.data.data
      setUser({user})
      console.log(user)
    })
    .catch(err => {
        console.log(err);
    })
  },[])
  
  console.log(user)

  const openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description:
        'This is the content of the notification. This is the content of the notification.',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  };
  
  const info = () => {
    message.info('This is a normal message');
    message.warning('This is a e', 1.5, 1.5)
  };
  const onFinish = (values) => {
    console.log('Success:', values);
    const action = addTodos(values);
    dispatch(action);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const removeItem= (values)=>{
    
    console.log(values)
  }
  return (
    <div style={{ marginTop: '80px' }}>
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
      <Button type="primary" onClick={openNotification}>
        Open the notification box
      </Button>
       
        {list.map((item,index)=>{
          return (
                      <div key={item.id}> 
                        <Item item={item} remove={removeItem}/>
                      </div>     
                        )
        })}
      <Form style={{width:'30%',margin:'0 auto'}}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 12 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Age"
          name="age"
          rules={[{ required: true, message: 'Please input your age!' }]}
        >
          <InputNumber />
        </Form.Item>


        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
}
function Item({ item ,remove}) {
 
  return <>
      {item.username} ---- {item.age} 
      <Button onClick={remove}>Delete</Button>
  </>

}
export default Truyen;

