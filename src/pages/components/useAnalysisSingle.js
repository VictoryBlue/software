import { useState } from 'react';
export const useAnalysisSingle =  ()=> {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const handleOpenModal = () => {
      setLoading(true);
    
      // 模拟异步请求
      setTimeout(() => {
        // 请求成功后设置loading为false
        setLoading(false);
        setModalVisible(true);
      }, 1000); // 请替换为实际的请求逻辑
    };
    
    const handleModalClose = () => {
      setModalVisible(false);
    };

    return {
        handleModalClose,
        handleOpenModal,
        modalVisible,
        loading
    }
}