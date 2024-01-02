import { useCallback, useState } from 'react';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

export const useAnalysisSingle = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const [prompt, setPrompt] = useState(
    '请评价这份餐饮作为午餐的健康程度，let think step by step' +
      JSON.stringify({
        key: '1',
        foodName: '鸡丝沙拉',
        foodAmount: '200g',
        servings: 1,
        eatingTime: '2023-01-01 12:30',
        cookingMethod: '碾磨',
      })
  );

  const fetchOpenAi = async () => {
    setModalVisible(true);
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: 'user', content: prompt }],
      model: 'gpt-3.5-turbo',
    });
    console.log(chatCompletion, 'chatCompletion');
    const ansnwer = chatCompletion.choices.shift();
    setAiResponse(ansnwer.message.content);
    console.log(ansnwer.message.content);
    // console.log(chatCompletion?.choices?.shift()?.messages?.content)
    setLoading(false);
  };
  const handleOpenModal = () => {
    setLoading(true);

    // 模拟异步请求
    fetchOpenAi();
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return {
    handleModalClose,
    handleOpenModal,
    modalVisible,
    aiResponse,
    loading,
    setPrompt,
  };
};

// import React, { useState, useEffect, useReducer } from "react";

// const useDataApi = (initialUrl, initialData) => {
//   const [data, setData] = useState(initialData);
//   const [url, setUrl] = useState(initialUrl);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       setIsError(null);
//       setIsLoading(true);
//       try {
//         const result = await fetch(url);
//         const resOjson = await result.json();
//         setData(resOjson);
//       } catch (error) {
//         setIsError(`${error}`);
//       }
//       setIsLoading(false);
//     };
//     fetchData();
//   }, [url]);
//   return [{ data, isLoading, isError }, setUrl];
// };
// export default useDataApi;
