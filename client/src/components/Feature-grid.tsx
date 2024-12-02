import React from 'react';
import { Code, Download, Globe, Zap, Users, MessageSquare, Paintbrush, Lightbulb, Type, Palette } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Real-time Collaboration",
    description: "Edit code across multiple files simultaneously with your team."
  },
  {
    icon: <Download className="h-6 w-6" />,
    title: "File Management",
    description: "Open, edit, save, and delete files within your collaboration session."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Language Support",
    description: "Comprehensive support for various programming languages."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Code Execution",
    description: "Run your code directly in the collaboration environment."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "User Presence",
    description: "See who's online and working on what in real-time."
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Group Chat",
    description: "Communicate with your team while coding."
  },
  {
    icon: <Paintbrush className="h-6 w-6" />,
    title: "Collaborative Drawing",
    description: "Sketch and draw together to visualize ideas."
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Smart Suggestions",
    description: "Get intelligent code suggestions as you type."
  },
  {
    icon: <Type className="h-6 w-6" />,
    title: "Customizable Interface",
    description: "Adjust font size and family to your preference."
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Multiple Themes",
    description: "Choose from various themes for a personalized experience."
  },
];

export default function FeatureGrid() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-2 bg-purple-100 p-2 rounded-full text-purple-700">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
