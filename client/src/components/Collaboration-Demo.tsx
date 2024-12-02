import React, { useState, useEffect } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const users = [
  { name: "Alice", avatar: "A", color: "bg-red-500" },
  { name: "Bob", avatar: "B", color: "bg-blue-500" },
  { name: "Carol", avatar: "C", color: "bg-green-500" },
];

const initialCode = `function calculateSum(a, b) {
  return a + b;
}

// TODO: Implement multiplication function
function multiplyNumbers(a, b) {
  // Your code here
}

console.log(calculateSum(5, 3)); // Output: 8
console.log(multiplyNumbers(4, 2)); // Output: 8`;

export default function CollaborationDemo() {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("Output: 8, 8");
  const [activeUser, setActiveUser] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUser((prevUser) => (prevUser + 1) % users.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (activeUser === 0) {
      setTyping(true);
      setCode((prevCode) =>
        prevCode.replace(
          "// TODO: Implement multiplication function",
          "function multiplyNumbers(a, b) { return a * b; }"
        )
      );
      setOutput("Output: 8, 8");
    } else if (activeUser === 1) {
      setTyping(true);
      setCode((prevCode) =>
        prevCode.replace(
          "console.log(calculateSum(5, 3)); // Output: 8",
          "console.log(calculateSum(5, 3)); // Output: 8, 12"
        )
      );
      setOutput("Output: 8, 12");
    } else if (activeUser === 2) {
      setTyping(true);
      setCode((prevCode) =>
        prevCode.replace(
          "console.log(multiplyNumbers(4, 2)); // Output: 8",
          "console.log(multiplyNumbers(4, 2)); // Output: 8, 8"
        )
      );
      setOutput("Output: 8, 8");
    } else {
      setTyping(false);
    }
  }, [activeUser]);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#2B4464]">
          See Collaboration in Action
        </h2>
        <div className="w-full max-w-4xl mx-auto bg-white overflow-hidden shadow-xl rounded-lg">
          <div className="flex items-center justify-between p-4 bg-gray-800 text-white">
            <div className="flex items-center space-x-2">
              {users.map((user, index) => (
                <div
                  key={user.name}
                  className={`flex items-center justify-center w-12 h-12 rounded-full text-white font-bold ${user.color} ${
                    index === activeUser ? "ring-4 ring-yellow-400 transform scale-110" : ""
                  } transition-all duration-300`}
                >
                  {user.avatar}
                </div>
              ))}
            </div>
            <div className="text-sm">
              <span>{users[activeUser].name} is editing</span>
              {typing && <span className="ml-2 italic text-yellow-400">Typing...</span>}
            </div>
          </div>
          <div className="p-4 bg-gray-100">
            <SyntaxHighlighter language="javascript" style={docco} customStyle={{ fontSize: "14px", borderRadius: "10px" }}>
              {code}
            </SyntaxHighlighter>
          </div>
          <div className="p-4 bg-gray-800 text-white text-lg">
            <p>{output}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
