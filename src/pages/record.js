import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Spin,
  Form,
  Input,
  DatePicker,
  Select,
} from "antd";
import { useAnalysisSingle } from "./components/useAnalysisSingle";
// import { AnalysisSingleModal } from "./components/AnalysisSingleModal";
const { Option } = Select;

const FoodRecordsPage = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      foodName: "鸡丝沙拉",
      foodAmount: "200g",
      servings: 1,
      eatingTime: "2023-01-01 12:30",
      cookingMethod: "碾磨",
    },
    // Add more food records as needed
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const { handleModalClose, handleOpenModal, modalVisible, loading } =
    useAnalysisSingle();

  const columns = [
    {
      title: "食物名称",
      dataIndex: "foodName",
      key: "foodName",
    },
    {
      title: "食物重量",
      dataIndex: "foodAmount",
      key: "foodAmount",
    },
    {
      title: "份额",
      dataIndex: "servings",
      key: "servings",
    },
    {
      title: "进餐时间",
      dataIndex: "eatingTime",
      key: "eatingTime",
    },
    {
      title: "烹饪方法",
      dataIndex: "cookingMethod",
      key: "cookingMethod",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button type="primary" onClick={() => handleEdit(record)}>
            编辑
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.key)}>
            删除
          </Button>
          <Button onClick={handleOpenModal}>打开模态框</Button>
        </span>
      ),
    },
  ];

  const handleEdit = (record) => {
    setFormData(record);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((record) => record.key !== key));
  };

  const handleFormSubmit = (values) => {
    if (formData.key) {
      // Update existing record
      setDataSource((prevDataSource) =>
        prevDataSource.map((record) =>
          record.key === formData.key ? { ...record, ...values } : record
        )
      );
    } else {
      // Add new record
      setDataSource((prevDataSource) => [
        ...prevDataSource,
        { ...values, key: (prevDataSource.length + 1).toString() },
      ]);
    }

    setIsModalVisible(false);
  };

  return (
    <div style={{ padding: "40px" }}>
      <div style={{ paddingBottom: "16px" }}>
        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          添加食物记录
        </Button>
      </div>

      <Modal
        title="你的模态框标题"
        open={modalVisible}
        onCancel={handleModalClose}
        footer={null}
      >
        {/* 使用 Spin 组件展示 loading 状态 */}
        <Spin spinning={loading}>
          111
        </Spin>
      </Modal>

      <Table dataSource={dataSource} columns={columns} />
      
 

      {/* Modal for adding/editing food record */}
      <Modal
        title={formData.key ? "Edit Food Record" : "增加一条食物记录"}
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        
        <Form
          onFinish={handleFormSubmit}
          initialValues={formData}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item
            label="食物名称"
            name="foodName"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="食物重量"
            name="foodAmount"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="份额" name="servings" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="进餐时间"
            name="eatingTime"
            rules={[{ required: true }]}
          >
            <DatePicker showTime format="YYYY-MM-DD HH:mm" />
          </Form.Item>
          <Form.Item
            label="烹饪方法"
            name="cookingMethod"
            rules={[{ required: true }]}
          >
            <Select>
              <Option value="Grilled">Grilled</Option>
              <Option value="Steamed">Steamed</Option>
              {/* Add more cooking methods as needed */}
            </Select>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 6, span: 18 }}>
            <Button type="primary" htmlType="submit">
              {formData.key ? "Update" : "Add"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FoodRecordsPage;
