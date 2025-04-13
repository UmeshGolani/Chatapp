"use client"

import { useEffect, useState } from "react"
import type { Message } from "@/lib/types"
import MessageList from "./MessageList"
import ChatHeader from "./ChatHeader"
import ChatInput from "./ChatInput"

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([])

  // Load messages from localStorage on component mount
  useEffect(() => {
    const storedMessages = localStorage.getItem("chatMessages")
    if (storedMessages) {
      try {
        setMessages(JSON.parse(storedMessages))
      } catch (error) {
        console.error("Error parsing stored messages:", error)
        // If there's an error parsing, start with empty messages
        localStorage.removeItem("chatMessages")
      }
    }
  }, [])

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages))
  }, [messages])

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return

    const newMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date().toISOString(),
    }

    setMessages((prev) => [...prev, newMessage])

    // Simulate a response after a short delay
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

  const clearChat = () => {
    setMessages([])
    localStorage.removeItem("chatMessages")
  }

  return (
    <div className="flex flex-col h-full bg-white">
      <ChatHeader onClearChat={clearChat} />
      <MessageList messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  )
}
