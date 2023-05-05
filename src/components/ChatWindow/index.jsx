import React, { useEffect, useState } from 'react'
import './ChatWindow.css'
import { Configuration, OpenAIApi } from "openai";

const KEY = import.meta.env.VITE_chatGPT_KEY;
const openai = new OpenAIApi(
  new Configuration({
    apiKey: KEY,
  })
);

export default function ChatWindow() {
  const [chatArray, setChatArray] = useState([{"role": "system", "content": "You are an Tiger. Respond only sounds a Tiger would make. Use maximum 2 'words' per response"}])
  const [chatText, setChatText] = useState("")
  
  async function chatBot() {
    const res = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: chatArray,
    });
    const data = res.data.choices[0].message["content"];
    console.log(data);
    setChatArray(chatArray => [...chatArray, {"role": "assistant", "content": data}])
    console.log(chatArray);
  }

  useEffect(() => {
    console.log(chatArray);
  }, [])

  function handleInput(e) {
    const newInput = e.target.value;
    setChatText(newInput)
  }

  function handleSubmit(e) {
    e.preventDefault();
    setChatArray(chatArray => [...chatArray, {"role": "user", "content": chatText}])
    chatBot()
    setChatText("")
  }
  
  return (
    <>
      <ul style={{listStyleType: "none"}}>
        {chatArray.slice(1).map((line, i) => (<li key={i}>{line.content}</li>))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input className="chat-input" value={chatText} type="text" onChange={handleInput} placeholder="Chat with your Body Double"/>
        <button className="chat-submit" type="submit">XXX</button>
      </form>
    </>
  )
}
