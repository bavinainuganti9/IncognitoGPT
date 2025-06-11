import React from "react";

export default function MessageBubble({ text, sender }) {
  const isUser = sender === "user";
  return (
    <div className={`p-3 my-2 rounded-lg max-w-lg ${isUser ? "bg-blue-600 text-white self-end" : "bg-gray-200 self-start"}`}>
      <pre>{text}</pre>
    </div>
  );
}
