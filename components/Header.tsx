import React from "react";
import { CategoryType } from "../types";

interface HeaderProps {
  currentCategory: CategoryType;
  onCategoryChange: (cat: CategoryType) => void;
}

const categories: CategoryType[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "React JS",
  "Node JS",
  "Express JS",
  "MongoDB",
];

const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onCategoryChange,
}) => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4 md:h-16 gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600">
              MERN Mastery
            </h1>
          </div>

          <nav className="flex items-center gap-1 overflow-x-auto w-full md:w-auto no-scrollbar pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  currentCategory === cat
                    ? "bg-indigo-600 text-white border-indigo-600"
                    : "text-slate-600 bg-white border-slate-200 hover:border-indigo-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
