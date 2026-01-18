"use client"

import { useState } from "react"
import { Send, Bot } from "lucide-react"

interface Message {
  id: number
  role: "assistant" | "user"
  content: string
}

export function AIAssistant() {
  const [messages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content: "Hi! I'm your AI Calendar Assistant. I can help you add events, check availability, or calculate travel times. What can I do for you today?",
    },
  ])
  const [input, setInput] = useState("")

  return (
    <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-sm border border-white/40 h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-white/40 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#2d4a5e] flex items-center justify-center flex-shrink-0">
          <Bot className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-[#2d4a5e]">AI Agent</h3>
          <p className="text-xs text-[#6b7c8a]">Powered by Gemini 2.0</p>
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className="mb-4">
            {message.role === "assistant" && (
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-[#2d4a5e] flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white/70 rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-[#2d4a5e] leading-relaxed">{message.content}</p>
                </div>
              </div>
            )}
            {message.role === "user" && (
              <div className="flex justify-end">
                <div className="bg-[#2d4a5e] rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%]">
                  <p className="text-sm text-white">{message.content}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="p-4 border-t border-white/40">
        <div className="flex items-center gap-2 bg-white/70 rounded-full px-4 py-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm text-[#2d4a5e] placeholder:text-[#6b7c8a]"
          />
          <button className="w-8 h-8 rounded-full bg-[#2d4a5e] flex items-center justify-center hover:bg-[#1e3a4e] transition-colors">
            <Send className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
