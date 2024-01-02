// src/Foods.js

import React, { useState, useEffect } from 'react';
import { Layout, Table, Button, Modal, Form, Input, InputNumber } from 'antd';
import { useFirebase } from './FirebaseContext';

const { Content } = Layout;

const Foods = () => {
  const firebase = useFirebase();
  const [foods, setFoods] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    // Fetch foods from Firebase Realtime Database
    const fetchData = async () => {
      const foodsRef = firebase.database().ref('foods');
      const snapshot = await foodsRef.once('value');
      const foodsData = snapshot.val() || [];
      setFoods(foodsData);
    };

    fetchData();
  }, [firebase]);

  const handleAddFood = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        const foodsRef = firebase.database().ref('foods');
        const newFoodRef = foodsRef.push();
        await newFoodRef.set(values);

        setFoods([...foods, { id: newFoodRef.key, ...values }]);
        form.resetFields();
        setModalVisible(false);
      })
      .catch((errorInfo) => {
        console.error('Validation failed:', errorInfo);
      });
  };

  const handleModalCancel = () => {
    form.resetFields();
    setModalVisible(false);
  };

  const columns = [
    {
      title: 'Food ID',
      dataIndex: 'id',
      key: 'id',
    },
    // Add other columns based on your data structure
    {
      title: 'Calories',
      dataIndex: 'calories',
      key: 'calories',
    },
    {
      title: 'Protein',
      dataIndex: 'protein',
      key: 'protein',
    },
    // ... Add other columns ...
  ];

  return (
    <Content>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={handleAddFood}>
          Add Food
        </Button>
      </div>
      <Table dataSource={foods} columns={columns} rowKey="id" />
      <Modal
        title="Add Food"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form form={form} layout="vertical">
          {/* Add form fields based on your data structure */}
          <Form.Item
            name="calories"
            label="Calories"
            rules={[{ required: true, message: 'Please enter calories' }]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="protein"
            label="Protein"
            rules={[{ required: true, message: 'Please enter protein' }]}
          >
            <InputNumber />
          </Form.Item>
          {/* Add other form fields ... */}
        </Form>
      </Modal>
    </Content>
  );
};

export default Foods;
