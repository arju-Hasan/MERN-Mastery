import React, { useState } from "react";
import { Question } from "../types";
import { getDeepDive } from "../services/geminiService";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface QuestionCardProps {
  item: Question;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  item,
  isFavorite,
  toggleFavorite,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [deepDive, setDeepDive] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeepDive = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (deepDive) {
      setDeepDive(null);
      return;
    }
    setIsLoading(true);
    const result = await getDeepDive(item.question, item.answer);
    setDeepDive(result || "No deep dive available.");
    setIsLoading(false);
    setIsOpen(true);
  };

  return (
    <div
      className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md ${
        isOpen ? "ring-2 ring-blue-500 ring-opacity-50" : ""
      }`}
    >
      <div
        className="p-5 cursor-pointer select-none flex justify-between items-start gap-4 bg-green-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500">
              {item.topic}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-slate-800 leading-snug">
            {item.question}
          </h3>
        </div>
        <div className="flex items-center gap-2 ">
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(item.id);
            }}
            className={`p-1.5 rounded-full hover:bg-slate-100 transition-colors ${
              isFavorite ? "text-rose-500" : "text-slate-300"
            }`}
          >
            {/* {isFavorite ? <FaHeart /> : <FaRegHeart />} */}
            <svg
              className="w-8 h-8 p-1 rounded-full"
              fill={isFavorite ? "currentColor" : "none"}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <svg
            className={`w-5 h-5 text-slate-400 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {isOpen && (
        <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-100 text-slate-700 leading-relaxed whitespace-pre-line">
            {item.answer}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <button
              onClick={handleDeepDive}
              disabled={isLoading}
              className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                isLoading
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
              }`}
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-slate-300 border-t-slate-600 rounded-full animate-spin"></div>
              ) : (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              )}
              {deepDive ? "Hide Deep Dive" : "Ask AI Deep Dive"}
            </button>

            {deepDive && (
              <div className="p-5 bg-indigo-50 border border-indigo-100 rounded-xl text-slate-700 prose prose-sm max-w-none prose-indigo animate-in zoom-in-95">
                <div className="flex items-center gap-2 mb-3 text-indigo-700 font-bold text-xs uppercase tracking-widest">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1a1 1 0 10-2 0v1a1 1 0 102 0zm6.364-1.636a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM15.35 15.35a1 1 0 01-1.415 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414z" />
                  </svg>
                  AI Insights
                </div>
                <div className="markdown-content">
                  {deepDive.split("\n").map((line, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
