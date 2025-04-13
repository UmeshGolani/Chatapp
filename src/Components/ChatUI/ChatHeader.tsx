"use client"

import { Trash2 } from "lucide-react"

interface ChatHeaderProps {
  onClearChat: () => void
}

export default function ChatHeader({ onClearChat }: ChatHeaderProps) {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white border-b">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
          AI
        </div>
        <div>
          <h2 className="font-semibold text-lg">Chat Assistant</h2>
          <p className="text-xs text-gray-500">Online</p>
        </div>
      </div>
      <button
        onClick={onClearChat}
        className="p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full transition-colors"
        aria-label="Clear chat history"
      >
        <Trash2 size={20} />
      </button>
    </div>
  )
}
