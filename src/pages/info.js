import {
  Form,
  Input,
  Radio,
  InputNumber,
  Checkbox,
  Select,
  Button,
} from 'antd';
import { useNavigate } from 'react-router-dom';
import useInformation from '../hooks/storeInfo';
const { Option } = Select;
const HealthForm = () => {
  const navigate = useNavigate();
  const { userInfo, isLoading, setUserInfo } = useInformation();
  const onFinish = (values) => {
    // 在这里处理收集到的健康信息
    // setUserInfo(values)
    localStorage.setItem('userInfo', JSON.stringify(values));
    navigate('/foodRecord');
  };
  return (
    <div style={{ padding: '48px' }}>
      <Form
        onFinish={onFinish}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="姓名"
          name="name"
          rules={[{ required: true, message: '请输入姓名' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="性别"
          name="gender"
          rules={[{ required: true, message: '请选择性别' }]}
        >
          <Radio.Group>
            <Radio value="male">男</Radio>
            <Radio value="female">女</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          label="年龄"
          name="age"
          rules={[{ required: true, message: '请输入年龄' }]}
        >
          <InputNumber min={1} />
        </Form.Item>
        <Form.Item
          label="特殊饮食需求"
          name="specialDiet"
          rules={[{ required: true, message: '请选择特殊饮食需求' }]}
        >
          <Select
            mode="multiple"
            placeholder="请选择特殊饮食需求"
          >
            <Option value="vegetarian">素食主义者</Option>
            <Option value="strictVegetarian">严格素食主义者</Option>
            <Option value="pescatarian">鱼素主义</Option>
            <Option value="glutenFree">不含麸质</Option>
            <Option value="lactoseFree">不含乳糖</Option>
            <Option value="keto">酮类</Option>
            <Option value="paleo">古食派</Option>
            <Option value="lowFODMAP">低腹敏饮食</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="是否有运动习惯"
          name="exerciseHabit"
          rules={[{ required: true, message: '请选择是否有运动习惯' }]}
        >
          <Checkbox.Group>
            <Checkbox value="cardio">有氧运动</Checkbox>
            <Checkbox value="strength">力量训练</Checkbox>
            <Checkbox value="flexibility">柔韧性训练</Checkbox>
            <Checkbox value="others">其他</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
          >
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default HealthForm;
