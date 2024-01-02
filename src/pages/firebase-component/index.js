// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { ConfigProvider, Layout, Menu } from 'antd';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { FirebaseProvider } from './FirebaseContext'; // FirebaseContext 是一个上下文提供器，用于在组件中访问 Firebase 实例
import App from './App';
import MealRecords from './MealRecords'; // 放在App里
const firebaseConfig = {
  // Your Firebase configuration
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <ConfigProvider>
    <FirebaseProvider value={firebase}>
      <Layout>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {/* Add your menu items here */}
        </Menu>
        <Layout.Content style={{ padding: '50px' }}>
          <App />
        </Layout.Content>
       
      </Layout>
    </FirebaseProvider>
  </ConfigProvider>,
  document.getElementById('root')
);
