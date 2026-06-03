"use client";

import { useState, useRef, useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { getBotResponse, QUICK_REPLIES } from "./chatbot-responses";

interface Message {
  id: string;
  role: "bot" | "user";
  message: string;
  buttons?: { label: string; href: string; external?: boolean }[];
}

interface ChatWindowProps {
  onClose: () => void;
}

export default function ChatWindow({ onClose }: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      message:
        "Hi there! 👋 I'm KNEX, KNEXVORA's assistant.\n\nI can help you learn about our platform, explore our modules, or connect you with our team. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      message: text.trim(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setShowQuickReplies(false);
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(text);
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        role: "bot",
        message: response.answer,
        buttons: response.buttons,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 900);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div
      className="flex flex-col overflow-hidden shadow-2xl"
      style={{
        width: "360px",
        height: "520px",
        borderRadius: "16px",
        border: "1px solid #c3c6d0",
        backgroundColor: "#faf9fd",
      }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 shrink-0"
        style={{ backgroundColor: "#00254e" }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white/20"
            style={{ backgroundColor: "#193b68", color: "white" }}
          >
            K
          </div>
          <div>
            <p
              className="text-white font-bold leading-none mb-0.5"
              style={{
                fontFamily: "'Source Serif 4', serif",
                fontSize: "15px",
              }}
            >
              KNEX
            </p>
            <p
              className="text-white/60 leading-none"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: "11px",
              }}
            >
              KNEXVORA Assistant
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-400" />
            <span
              className="text-white/60"
              style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: "10px",
              }}
            >
              Online
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors p-1"
            aria-label="Close chat"
          >
            <span className="material-symbols-outlined text-[20px]">
              close
            </span>
          </button>
        </div>
      </div>

      {/* Subheader */}
      <div
        className="px-5 py-2 shrink-0"
        style={{ backgroundColor: "#193b68" }}
      >
        <p
          className="text-white/50"
          style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: "11px",
          }}
        >
          Typically replies instantly
        </p>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto px-4 py-4 space-y-4"
        style={{ backgroundColor: "#faf9fd" }}
      >
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            role={msg.role}
            message={msg.message}
            buttons={msg.buttons}
          />
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold"
              style={{ backgroundColor: "#00254e" }}
            >
              K
            </div>
            <div
              className="px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-1"
              style={{ backgroundColor: "#eeedf2" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-bounce"
                style={{ backgroundColor: "#00254e", animationDelay: "0ms" }}
              />
              <span
                className="w-2 h-2 rounded-full animate-bounce"
                style={{
                  backgroundColor: "#00254e",
                  animationDelay: "150ms",
                }}
              />
              <span
                className="w-2 h-2 rounded-full animate-bounce"
                style={{
                  backgroundColor: "#00254e",
                  animationDelay: "300ms",
                }}
              />
            </div>
          </div>
        )}

        {/* Quick replies */}
        {showQuickReplies && !isTyping && (
          <div className="flex flex-wrap gap-2 pt-2">
            {QUICK_REPLIES.map((qr) => (
              <button
                key={qr}
                onClick={() => sendMessage(qr)}
                className="px-3 py-1.5 rounded-full border text-xs font-bold transition-all duration-200"
                style={{
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: "11px",
                  fontWeight: "700",
                  borderColor: "#00254e",
                  color: "#00254e",
                  backgroundColor: "transparent",
                }}
              >
                {qr}
              </button>
            ))}
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        className="shrink-0 px-4 py-3 border-t"
        style={{
          borderColor: "#c3c6d0",
          backgroundColor: "#ffffff",
        }}
      >
        <form onSubmit={handleSubmit} className="flex items-center gap-3">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 outline-none bg-transparent"
            style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: "14px",
              color: "#1a1c1f",
            }}
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-40"
            style={{ backgroundColor: "#00254e" }}
            aria-label="Send"
          >
            <span
              className="material-symbols-outlined text-white"
              style={{ fontSize: "18px" }}
            >
              send
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}