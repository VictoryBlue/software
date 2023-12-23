import { useState } from 'react';
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,

});

export const useAnalysisSingle =  ()=> {
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [aiResponse, setAiResponse] = useState('')
    const fetchOpenAi  = async ()=>{
      
      setModalVisible(true);
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });
      console.log(chatCompletion, 'chatCompletion')
      const ansnwer = chatCompletion.choices.shift()
      setAiResponse(ansnwer.message.content)
      console.log(ansnwer.message.content)
      // console.log(chatCompletion?.choices?.shift()?.messages?.content)
      setLoading(false);
      
    }
    const handleOpenModal = () => {
      setLoading(true);
    
      // 模拟异步请求
      fetchOpenAi()
      
    };
    
    const handleModalClose = () => {
      setModalVisible(false);
    };

    return {
        handleModalClose,
        handleOpenModal,
        modalVisible,
        aiResponse,
        loading
    }
}