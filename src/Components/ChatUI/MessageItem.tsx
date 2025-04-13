import { formatDistanceToNow } from "date-fns"
import type { Message } from "@/lib/types"

interface MessageItemProps {
  message: Message
}

export default function MessageItem({ message }: MessageItemProps) {
  const isUser = message.sender === "user"
  const timestamp = new Date(message.timestamp)
  const timeAgo = formatDistanceToNow(timestamp, { addSuffix: true })

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 ${
          isUser ? "bg-purple-600 text-white rounded-tr-none" : "bg-gray-200 text-gray-800 rounded-tl-none"
        }`}
      >
        <p className="break-words">{message.content}</p>
        <p className={`text-xs mt-1 ${isUser ? "text-purple-200" : "text-gray-500"}`}>{timeAgo}</p>
      </div>
    </div>
  )
}
