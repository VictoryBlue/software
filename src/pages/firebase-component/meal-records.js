// src/MealRecords.js

import React, { useState, useEffect } from 'react';
import { Layout, Table, Button, Modal, Form, Input, InputNumber } from 'antd';
import { useFirebase } from './FirebaseContext';

const { Content } = Layout;

const MealRecords = () => {
  const firebase = useFirebase();
  const [mealRecords, setMealRecords] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    // Fetch meal records from Firebase Realtime Database
    const fetchData = async () => {
      const mealRecordsRef = firebase.database().ref('mealRecords');
      const snapshot = await mealRecordsRef.once('value');
      const mealRecordsData = snapshot.val() || [];
      setMealRecords(mealRecordsData);
    };

    fetchData();
  }, [firebase]);

  const handleAddMealRecord = () => {
    setModalVisible(true);
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        const mealRecordsRef = firebase.database().ref('mealRecords');
        const newMealRecordRef = mealRecordsRef.push();
        await newMealRecordRef.set(values);

        setMealRecords([...mealRecords, { id: newMealRecordRef.key, ...values }]);
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
      title: 'User Account',
      dataIndex: 'userAccount',
      key: 'userAccount',
    },
    {
      title: 'Food ID',
      dataIndex: 'foodId',
      key: 'foodId',
    },
    // Add other columns based on your data structure
    {
      title: 'Meal Time',
      dataIndex: 'mealTime',
      key: 'mealTime',
    },
    {
      title: 'Food Weight',
      dataIndex: 'foodWeight',
      key: 'foodWeight',
    },
    // ... Add other columns ...
  ];

  return (
    <Content>
      <div style={{ marginBottom: 16 }}>
        <Button type="primary" onClick={handleAddMealRecord}>
          Add Meal Record
        </Button>
      </div>
      <Table dataSource={mealRecords} columns={columns} rowKey="id" />
      <Modal
        title="Add Meal Record"
        visible={modalVisible}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
      >
        <Form form={form} layout="vertical">
          {/* Add form fields based on your data structure */}
          <Form.Item
            name="mealTime"
            label="Meal Time"
            rules={[{ required: true, message: 'Please enter meal time' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="foodWeight"
            label="Food Weight"
            rules={[{ required: true, message: 'Please enter food weight' }]}
          >
            <InputNumber />
          </Form.Item>
          {/* Add other form fields ... */}
        </Form>
      </Modal>
    </Content>
  );
};

export default MealRecords;
