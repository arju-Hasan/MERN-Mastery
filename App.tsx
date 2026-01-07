import React, { useState, useMemo, useEffect } from "react";
import Header from "./components/Header";
import QuestionCard from "./components/QuestionCard";
import { QUESTIONS } from "./data";
import { CategoryType, Question } from "./types";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";

const getCategoryStyles = (cat: CategoryType) => {
  switch (cat) {
    case "HTML":
      return "from-orange-500 to-red-600";
    case "CSS":
      return "from-blue-500 to-cyan-600";
    case "JavaScript":
      return "from-yellow-400 to-orange-500";
    case "React JS":
      return "from-sky-500 to-blue-700";
    case "Node JS":
      return "from-green-500 to-emerald-700";
    case "Express JS":
      return "from-slate-600 to-slate-800";
    case "MongoDB":
      return "from-emerald-500 to-green-700";
    default:
      return "from-indigo-600 to-blue-700";
  }
};

const App: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<CategoryType>("HTML");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("All");
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("mern-interview-favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("mern-interview-favorites", JSON.stringify(favorites));
  }, [favorites]);

  const topics = useMemo(() => {
    const relevant = QUESTIONS.filter((q) => q.category === currentCategory);
    const uniqueTopics = Array.from(new Set(relevant.map((q) => q.topic)));
    return ["All", ...uniqueTopics];
  }, [currentCategory]);

  const filteredQuestions = useMemo(() => {
    return QUESTIONS.filter((q) => {
      const matchCategory = q.category === currentCategory;
      const matchTopic = selectedTopic === "All" || q.topic === selectedTopic;
      const matchSearch =
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchTopic && matchSearch;
    });
  }, [currentCategory, selectedTopic, searchQuery]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header
        currentCategory={currentCategory}
        onCategoryChange={(cat) => {
          setCurrentCategory(cat);
          setSelectedTopic("All");
          setSearchQuery("");
        }}
      />

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <section
            className={`bg-gradient-to-br ${getCategoryStyles(
              currentCategory
            )} rounded-2xl p-8 text-white shadow-xl overflow-hidden relative transition-all duration-500`}
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold mb-2">
                {currentCategory} Interview Pro
              </h2>
              <p className="text-white/80 max-w-lg">
                Master the fundamentals and advanced concepts of{" "}
                {currentCategory}. Click any question to reveal the answer or
                use AI for deep dives.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl font-bold block">
                    {filteredQuestions.length}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60">
                    Questions
                  </span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                  <span className="text-2xl font-bold block">
                    {favorites.length}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-white/60">
                    Saved
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          </section>

          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="relative w-full md:flex-grow">
              <input
                type="text"
                placeholder={`Search ${currentCategory} questions...`}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute left-3 top-3.5 w-5 h-5 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => setSelectedTopic(topic)}
                  className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                    selectedTopic === topic
                      ? "bg-slate-900 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-4 ">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((q) => (
                <QuestionCard
                  key={q.id}
                  item={q}
                  isFavorite={favorites.includes(q.id)}
                  toggleFavorite={toggleFavorite}
                />
              ))
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
                <p className="text-slate-400">
                  No questions found matching your criteria.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 py-8 bg-white mt-12">
        <div className="container mx-auto px-4 text-center text-slate-500 text-xs">
          <p className="flex items-center justify-center gap-1">
            © 2025 MERN Mastery • Developed by-
            <a
              href="https://arju-hasan.netlify.app"
              className="text-blue-600 hover:cursor-pointer"
            >
              Arju-hasan
            </a>
            <a
              href="https://github.com/arju-Hasan"
              className="text-blue-600 hover:cursor-pointer text-xl"
            >
              <FaSquareGithub />
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

// import React, { useState, useMemo, useEffect } from "react";
// import Header from "./components/Header";
// import QuestionCard from "./components/QuestionCard";
// import { QUESTIONS } from "./data";
// import { CategoryType, Question } from "./types";

// const getCategoryStyles = (cat: CategoryType) => {
//   switch (cat) {
//     case "HTML":
//       return "from-orange-500 to-red-600";
//     case "CSS":
//       return "from-blue-500 to-cyan-600";
//     case "JavaScript":
//       return "from-yellow-400 to-orange-500";
//     case "React JS":
//       return "from-sky-500 to-blue-700";
//     case "Node JS":
//       return "from-green-500 to-emerald-700";
//     case "Express JS":
//       return "from-slate-600 to-slate-800";
//     case "MongoDB":
//       return "from-emerald-500 to-green-700";
//     default:
//       return "from-indigo-600 to-blue-700";
//   }
// };

// const App: React.FC = () => {
//   const [currentCategory, setCurrentCategory] = useState<CategoryType>("HTML");
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedTopic, setSelectedTopic] = useState<string>("All");
//   const [favorites, setFavorites] = useState<string[]>([]);

//   // Load favorites safely
//   useEffect(() => {
//     try {
//       const saved = localStorage.getItem("mern-interview-favorites");
//       if (saved) setFavorites(JSON.parse(saved));
//     } catch (e) {
//       console.error("Failed to parse favorites from localStorage", e);
//       setFavorites([]);
//     }
//   }, []);

//   // Save favorites
//   useEffect(() => {
//     localStorage.setItem("mern-interview-favorites", JSON.stringify(favorites));
//   }, [favorites]);

//   // Get topics for current category
//   const topics = useMemo(() => {
//     const relevant = QUESTIONS.filter((q) => q.category === currentCategory);
//     const uniqueTopics = Array.from(new Set(relevant.map((q) => q.topic)));
//     return ["All", ...uniqueTopics];
//   }, [currentCategory]);

//   // Filter questions
//   const filteredQuestions = useMemo(() => {
//     return QUESTIONS.filter((q) => {
//       const matchCategory = q.category === currentCategory;
//       const matchTopic = selectedTopic === "All" || q.topic === selectedTopic;
//       const matchSearch =
//         q.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         q.answer?.toLowerCase().includes(searchQuery.toLowerCase());
//       return matchCategory && matchTopic && matchSearch;
//     });
//   }, [currentCategory, selectedTopic, searchQuery]);

//   const toggleFavorite = (id: string) => {
//     setFavorites((prev) =>
//       prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
//     );
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-slate-50">
//       <Header
//         currentCategory={currentCategory}
//         onCategoryChange={(cat) => {
//           setCurrentCategory(cat);
//           setSelectedTopic("All");
//           setSearchQuery("");
//         }}
//       />

//       <main className="flex-grow container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto space-y-8">
//           {/* Category Header */}
//           <section
//             className={`bg-gradient-to-br ${getCategoryStyles(
//               currentCategory
//             )} rounded-2xl p-8 text-white shadow-xl overflow-hidden relative transition-all duration-500`}
//           >
//             <div className="relative z-10">
//               <h2 className="text-3xl font-extrabold mb-2">
//                 {currentCategory} Interview Prep
//               </h2>
//               <p className="text-white/80 max-w-lg">
//                 Master the fundamentals and advanced concepts of{" "}
//                 {currentCategory}. Click any question to reveal the answer or
//                 use AI for deep dives.
//               </p>
//               <div className="mt-6 flex flex-wrap gap-4">
//                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
//                   <span className="text-2xl font-bold block">
//                     {filteredQuestions.length}
//                   </span>
//                   <span className="text-[10px] uppercase tracking-wider text-white/60">
//                     Questions
//                   </span>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
//                   <span className="text-2xl font-bold block">
//                     {favorites.length}
//                   </span>
//                   <span className="text-[10px] uppercase tracking-wider text-white/60">
//                     Saved
//                   </span>
//                 </div>
//               </div>
//             </div>
//             <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
//           </section>

//           {/* Search & Topic Filters */}
//           <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
//             <div className="relative w-full md:flex-grow">
//               <input
//                 type="text"
//                 placeholder={`Search ${currentCategory} questions...`}
//                 className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-sm"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <svg
//                 className="absolute left-3 top-3.5 w-5 h-5 text-slate-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </div>

//             <div
//               className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto"
//               style={{ scrollbarWidth: "none" }}
//             >
//               {topics.map((topic) => (
//                 <button
//                   key={topic}
//                   onClick={() => setSelectedTopic(topic)}
//                   className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
//                     selectedTopic === topic
//                       ? "bg-slate-900 text-white"
//                       : "bg-white text-slate-600 border border-slate-200 hover:border-indigo-300"
//                   }`}
//                 >
//                   {topic}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Questions List */}
//           <div className="grid gap-4">
//             {filteredQuestions.length > 0 ? (
//               filteredQuestions.map((q) => (
//                 <QuestionCard
//                   key={q.id}
//                   item={q}
//                   isFavorite={favorites.includes(q.id)}
//                   toggleFavorite={toggleFavorite}
//                 />
//               ))
//             ) : (
//               <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-300">
//                 <p className="text-slate-400">
//                   No questions found matching your criteria.
//                 </p>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-slate-200 py-8 bg-white mt-12">
//         <div className="container mx-auto px-4 text-center text-slate-500 text-xs">
//           <p>
//             © 2024 DevInterview Pro • Updated with HTML, CSS, and JS Essentials
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default App;
