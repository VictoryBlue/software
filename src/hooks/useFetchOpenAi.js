import { useState, useEffect } from 'react';
import OpenAI from 'openai';
const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});
export const useOpenAiApi = (initialData) => {
  const [data, setPrompt] = useState(initialData);
  const [aiResponse, setAiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  useEffect(() => {
    const fetchOpenAi = async () => {
      setIsLoading(true);
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: data }],
        model: 'gpt-3.5-turbo',
      });
      console.log(chatCompletion, 'chatCompletion');
      const ansnwer = chatCompletion.choices.shift();
      setAiResponse(ansnwer.message.content);
      console.log(ansnwer.message.content);
      // console.log(chatCompletion?.choices?.shift()?.messages?.content)
      setIsLoading(false);
    };
    fetchOpenAi();
  }, [data]);
  return { aiResponse, isLoading, setPrompt, isError };
};
export default useOpenAiApi;
