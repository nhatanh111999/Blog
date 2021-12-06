import React from 'react';
import 'antd/dist/antd.css';
import { Modal, Form, Input, Checkbox,Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import Button from '@material-ui/core/Button';

export default function ModalLogin(props) {


  const onFinish = (values) => {

    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {

    console.log('Failed:', errorInfo);
  };


  return (
    <>
      <Modal
        title="SIGN IN"
        footer={false}
        centered
        visible={props.visible}
        onCancel={props.onVisible}
        width={400}

      >
        <Form
          name="basic"
          labelCol={{
            span: 12,
          }}
          wrapperCol={{
            span: 18,
          }}
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
          </Form.Item>

          <Form.Item wrapperCol={{
            span: 18,
          }}>
            <Form.Item name="remember" valuePropName="checked" wrapperCol={{
              span: 16,
            }} noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <span className="login-form-forgot" >
              Forgot password
            </span>
          </Form.Item>

          <Form.Item className="form-item-button">
            <Button size="large" className="btnlogin" variant="outlined" color="secondary" type="submit">Login</Button>
          </Form.Item>
          <Divider orientation="center">OR</Divider>
          <Form.Item className="form-item-button">
            <Button size="large" className="btnlogin" variant="outlined" color="secondary" type="submit">Login By Gmail</Button>  
          </Form.Item>
          <Form.Item className="form-item-button">
            <Button variant="outlined" className="btnlogin" color="secondary" type="submit">Login By Facebook</Button>
          </Form.Item>
          <Form.Item className="form-item-button">
            <span className="otherlogin" >Create Account</span>
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

