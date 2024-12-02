import React from 'react';

const testimonials = [
  {
    name: "Alice Johnson",
    role: "Senior Developer",
    content: "This platform has revolutionized our team's collaboration. Real-time coding and instant feedback have significantly boosted our productivity.",
    avatar: "AJ"
  },
  {
    name: "Bob Smith",
    role: "Tech Lead",
    content: "The ability to execute code within the collaboration environment has been a game-changer for our remote team. It's like having a shared development environment.",
    avatar: "BS"
  },
  {
    name: "Carol Davis",
    role: "Full Stack Engineer",
    content: "I love the collaborative drawing feature. It's perfect for quick diagrams and explaining complex concepts visually during our coding sessions.",
    avatar: "CD"
  }
];

export default function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white ">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl text-center mb-12 text-[#2B4464]">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#2B4464] text-[white] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="flex items-center space-x-6 mb-6">
                {/* Avatar */}
                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#70A5B2] to-[#20C997] flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-xl text-gray-50 font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-white">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-lg text-white italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
