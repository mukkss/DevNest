import React, { useState, useEffect } from "react";
import { sendPrompt } from "../api/prompt";

const PromptPage: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState<{
    type: "user" | "ai";
    message: string;
  }[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState<string>("");

  // Fetch username from localStorage when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUsername(user.username); // Set the username from localStorage
    } else {
      setUsername("Guest"); // Default username if none found
    }
  }, []);

  const handleSubmit = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setChatHistory((prev) => [...prev, { type: "user", message: prompt }]);

    try {
      const botResponse = await sendPrompt(prompt);
      setChatHistory((prev) => [...prev, { type: "ai", message: botResponse }]);
      setPrompt("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4">
      <div className="shadow-2xl rounded-xl w-full max-w-4xl h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#20C997] text-white text-center py-4 text-xl font-bold">
          Hello, {username}
        </div>

        {/* Chat Area with Background Image */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-100 relative">
          {/* Background Image */}
          <img
            src="/bg.jpg"
            className="w-full h-full object-cover opacity-20 absolute inset-0"
            alt="Background"
          />

          {/* Chat messages */}
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex ${chat.type === "user" ? "justify-end" : "justify-start"
                }`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-lg text-white ${chat.type === "user"
                    ? "bg-blue-500 text-right"
                    : "bg-gray-700 text-left"
                  }`}
              >
                {chat.message}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-700 text-white px-4 py-2 rounded-lg">
                AI is typing...
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="bg-white p-4 border-t border-gray-300">
          {error && (
            <div className="bg-red-100 text-red-700 px-4 py-2 rounded-lg mb-4">
              {error}
            </div>
          )}
          <div className="flex items-center space-x-4">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1 border rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300 text-black"
              rows={2}
              placeholder="Type your message here..."
            />
            <button
              onClick={handleSubmit}
              className={`px-6 py-2 rounded-lg text-white font-bold ${loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#20C997] hover:bg-[#188d6a]"
                }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptPage;
