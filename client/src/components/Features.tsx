import React from 'react';
import { Code, Download, Globe, Zap, Users, MessageSquare, Paintbrush, Lightbulb, Type, Palette } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-12 w-12 transition-transform transform hover:scale-110" />,
    title: "Real-time Collaboration",
    description: "Live Collab with Multi-Cursor support. Socket Powered updates in real-time. Share your workspace seamlessly across the globe."
  },
  {
    icon: <Download className="h-12 w-12 transition-transform transform hover:scale-110" />,
    title: "AI-powered Assistance",
    description: "Instant answers, code suggestions, debugging help. Boost productivity with intelligent tools at your fingertip."
  },
  {
    icon: <Globe className="h-12 w-12 transition-transform transform hover:scale-110" />,
    title: "Communication made easy",
    description: "Integrated group chats for teams. Built-in tooltips to simplify collaborations."
  },
];

export default function Features() {
  return (
    <section className="bg-gradient-to-b from-[#112c4c] to-[#0A1B2F] min-h-screen w-full py-12 md:py-24 lg:py-32 text-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-center mb-12 text-[#EAEAEA]">
          Why Choose DevNest?
        </h2>
        <div className="mt-28 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white text-[#2B4464] rounded-2xl shadow-lg p-8 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-[#20C997] hover:to-[#1a7f6f] hover:text-white"
            >
              <div className="flex items-center mb-6 justify-center md:justify-start">
                <div className="bg-gradient-to-br from-[#70A5B2] to-[#20C997] p-4 rounded-full text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-lg">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
