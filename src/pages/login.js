// Login.js

import React, { useState } from 'react';
// import { auth } from './firebase';
import { Input, Button, Form, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      // await auth.signInWithEmailAndPassword(email, password);
      console.log('Login successful');
      navigate('/healthInfo')
    } catch (error) {
      console.error('Login failed', error.message);
    }
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Card title="登录" style={{ width: 400 }}>
      <Form>
        <Form.Item>
          <Input
            prefix={<UserOutlined />}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={handleLogin} block>
            提交
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
    );
};

export default Login;
