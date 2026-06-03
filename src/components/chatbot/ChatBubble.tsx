"use client";

interface ChatBubbleProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatBubble({ onClick, isOpen }: ChatBubbleProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
      style={{
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#00254e",
      }}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {!isOpen && (
        <>
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ backgroundColor: "#00254e" }}
          />
          <span
            className="absolute inset-0 rounded-full animate-ping opacity-10"
            style={{
              backgroundColor: "#00254e",
              animationDelay: "0.5s",
            }}
          />
        </>
      )}

      <span
        className="material-symbols-outlined text-white transition-all duration-300"
        style={{ fontSize: "24px" }}
      >
        {isOpen ? "close" : "chat"}
      </span>

      {!isOpen && (
        <span
          className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full border-2 border-white"
          style={{ backgroundColor: "#4ade80" }}
        />
      )}
    </button>
  );
}