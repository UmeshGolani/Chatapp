"use client"

import ChatInput from "@/Components/ChatUI/ChatInput";
import { useState } from "react";
import type { Message } from "@/lib/types"

export default function Home() {

  const [messages, setMessages] = useState<Message[]>([])


  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, newMessage])

    setTimeout(() => {
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Response to: "${content}"`,
        sender: "bot",
        timestamp: new Date().toISOString(),
      }
      setMessages((prev) => [...prev, responseMessage])
    }, 1000)
  }

  return (
    <div>
      <ChatInput onSendMessage={handleSendMessage}/>
    </div>
  );
}
