import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import {   BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
// import Home from './components/Home'; // 你的首页组件
import FoodRecordForm from './pages/record'; // 另一个页面的组件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    < BrowserRouter>
  <Routes>
  <Route path="/" exact  element={<App />}/>
    <Route path="/foodRecord"  element={<FoodRecordForm />} />
  </Routes>
  </BrowserRouter>
    

  
  
 
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
