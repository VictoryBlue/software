// useInformation.js
import { useState, useEffect } from 'react';

const useInformation = () => {
  const storedUserInfo = JSON.parse(localStorage.getItem('userInfo')==='undefined'?'{}':localStorage.getItem('userInfo'));
  
  const [userInfo, setUserInfo] = useState(storedUserInfo || {
    
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // 模拟异步获取用户信息的过程
        // const response = await fetch('api/userinfo');
        // const data = await response.json();

        // 模拟数据
        
        
        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        
      } catch (error) {
        console.error('Error fetching user information:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [userInfo]);

  return { userInfo, isLoading, setUserInfo };
};

export default useInformation;
