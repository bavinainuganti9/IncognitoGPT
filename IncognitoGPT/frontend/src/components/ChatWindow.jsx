import React, { useState } from "react";
import useStore from "../store";
import MessageBubble from "./MessageBubble";
import axios from "axios";

export default function ChatWindow() {
  const [input, setInput] = useState("");
  const { messages, addMessage } = useStore();

  const send = async () => {
    if (!input.trim()) return;
    addMessage({ sender: "user", text: input });
    const res = await axios.post("http://localhost:8000/chat/", new URLSearchParams({ prompt: input }));
    addMessage({ sender: "ai", text: res.data.response });
    setInput("");
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto flex flex-col p-4">
        {messages.map((msg, i) => (
          <MessageBubble key={i} {...msg} />
        ))}
      </div>
      <div className="p-4 flex">
        <input value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 border p-2 rounded-l" />
        <button onClick={send} className="bg-blue-600 text-white px-4 rounded-r">Send</button>
      </div>
    </div>
  );
}
