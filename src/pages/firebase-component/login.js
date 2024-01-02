// src/Login.js

import React, { useState } from 'react';
import { Layout, Form, Input, Button, message } from 'antd';
import { Redirect } from 'react-router-dom';
import { useFirebase } from './FirebaseContext';

function Login() {
  const firebase = useFirebase();
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (values) => {
    const { email, password } = values;

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      setLoggedIn(true);
    } catch (error) {
      message.error('Login failed. Check your credentials.');
    }
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Layout.Content>
      <h1>Login</h1>
      <Form onFinish={handleLogin}>
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Log In
          </Button>
        </Form.Item>
      </Form>
    </Layout.Content>
  );
}

export default Login;
