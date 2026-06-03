"use client";

import Link from "next/link";

interface MessageButton {
  label: string;
  href: string;
  external?: boolean;
}

interface ChatMessageProps {
  role: "bot" | "user";
  message: string;
  buttons?: MessageButton[];
}

export default function ChatMessage({
  role,
  message,
  buttons,
}: ChatMessageProps) {
  const isBot = role === "bot";

  return (
    <div
      className={`flex items-start gap-3 ${
        isBot ? "justify-start" : "justify-end"
      }`}
    >
      {isBot && (
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold mt-1"
          style={{ backgroundColor: "#00254e" }}
        >
          K
        </div>
      )}

      <div
        className={`flex flex-col gap-2 max-w-[80%] ${
          isBot ? "items-start" : "items-end"
        }`}
      >
        <div
          className={`px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
            isBot ? "rounded-tl-none" : "rounded-tr-none"
          }`}
          style={{
            backgroundColor: isBot ? "#eeedf2" : "#00254e",
            color: isBot ? "#1a1c1f" : "#ffffff",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: "14px",
            lineHeight: "22px",
          }}
        >
          {message}
        </div>

        {buttons && buttons.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-1">
            {buttons.map((btn) =>
              btn.external ? (
                <a
                  key={btn.label}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 border rounded-full transition-all duration-200"
                  style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    borderColor: "#00254e",
                    color: "#00254e",
                    textDecoration: "none",
                  }}
                >
                  {btn.label}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "12px" }}
                  >
                    open_in_new
                  </span>
                </a>
              ) : (
                <Link
                  key={btn.label}
                  href={btn.href}
                  className="inline-flex items-center gap-1 px-3 py-1.5 border rounded-full transition-all duration-200"
                  style={{
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                    borderColor: "#00254e",
                    color: "#00254e",
                    textDecoration: "none",
                  }}
                >
                  {btn.label}
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "12px" }}
                  >
                    arrow_forward
                  </span>
                </Link>
              )
            )}
          </div>
        )}
      </div>

      {!isBot && (
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-[11px] font-bold mt-1"
          style={{ backgroundColor: "#193b68" }}
        >
          U
        </div>
      )}
    </div>
  );
}