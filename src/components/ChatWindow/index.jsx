import React, { useEffect } from 'react'
import './ChatWindow.css'
import { Configuration, OpenAIApi } from "openai";

const KEY = import.meta.env.VITE_chatGPT_KEY;
const openai = new OpenAIApi(
  new Configuration({
    apiKey: KEY,
  })
);

export default function ChatWindow() {
  function hello() {
    console.log("hello");
  }

  useEffect(() => {
    hello()
  }, [])
  return (
    <div>index-Hello</div>
  )
}

