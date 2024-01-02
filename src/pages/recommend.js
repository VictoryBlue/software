import useInformation from '../hooks/storeInfo';
import { Card, Divider, Space, Tag, Spin } from 'antd';
import { useOpenAiApi } from '../hooks/useFetchOpenAi';
import { recipt } from '../promps/recipe';
import { useEffect } from 'react';
const { Meta } = Card;
const Recommend = () => {
  //  const {userInfo:userData, isLoading, setUserInfo} = useInformation()
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  //  alert(JSON.stringify(userInfo))
  //    const { name, gender, age, specialDiet, exerciseHabit } = userInfo;

  const {
    aiResponse,
    isLoading: isFetchLoading,
    setPrompt,
    isError,
  } = useOpenAiApi(recipt + JSON.stringify(userInfo));
  console.log(userInfo);
  return (
    <>
      <div
        style={{ display: 'flex', justifyContent: 'center', padding: '16px' }}
      >
        <Card
          title="个人信息"
          style={{ width: 1000 }}
        >
          <Meta
            title={userInfo?.name}
            description={`年龄: ${userInfo?.age} | 性别: ${
              userInfo?.gender === 'female' ? '女' : '男'
            }`}
          />
          <Space
            direction="vertical"
            style={{ marginTop: 16 }}
          >
            <Tag color="blue">
              饮食偏好: {userInfo?.specialDiet?.join(', ')}
            </Tag>
            <Tag color="green">
              运动习惯: {userInfo?.exerciseHabit?.join(', ')}
            </Tag>
          </Space>
          <Divider>个性化食谱</Divider>
          <Spin spinning={isFetchLoading}>{aiResponse}</Spin>
        </Card>
      </div>
    </>
  );
};
export default Recommend;
