"use client"

import { useEffect, useRef } from "react"
import type { Message } from "@/lib/types"
import MessageItem from "./MessageItem"

interface MessageListProps {
  messages: Message[]
}

export default function MessageList({ messages }: MessageListProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full text-gray-400">
          <p>No messages yet. Start a conversation!</p>
        </div>
      ) : (
        messages.map((message) => <MessageItem key={message.id} message={message} />)
      )}
      <div ref={messagesEndRef} />
    </div>
  )
}
