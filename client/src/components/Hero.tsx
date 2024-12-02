import { ArrowRight } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import { AuroraBackground } from './ui/aurora-background';

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);
  const [activeLink, setActiveLink] = useState('home'); // Track active link state
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For mobile menu

  useEffect(() => {
    // Fetch the animation data from the public folder
    fetch('/hero1.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading animation:', error));
  }, []);

  if (!animationData) {
    return <div>Loading...</div>; // Show loading while fetching the animation
  }

  // Handle active link on click
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close mobile menu after clicking link
  };

  return (
    <>
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold text-[#2B4464]">
            <span className='text-[#70A5B2]'>Dev</span>Nest
          </h1>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#2B4464]">
              <span className="material-icons">menu</span>
            </button>
          </div>

          {/* Navbar Links for PC */}
          <ul className="hidden md:flex space-x-6">
            <li>
              <a
                href="#home"
                className={`text-[#2B4464] hover:text-[#20C997] transition-all duration-300 ease-in-out ${activeLink === 'home' ? 'text-[#20C997]' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`text-[#2B4464] hover:text-[#20C997] transition-all duration-300 ease-in-out ${activeLink === 'about' ? 'text-[#20C997]' : ''}`}
                onClick={() => handleLinkClick('about')}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`text-[#2B4464] hover:text-[#20C997] transition-all duration-300 ease-in-out ${activeLink === 'contact' ? 'text-[#20C997]' : ''}`}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Navbar Links for Mobile */}
          <ul className={`flex md:hidden flex-col space-y-4 absolute bg-white left-0 top-16 w-full p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <li>
              <a
                href="#home"
                className={`text-[#2B4464] hover:text-[#20C997] transition-all duration-300 ease-in-out ${activeLink === 'home' ? 'text-[#20C997]' : ''}`}
                onClick={() => handleLinkClick('home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={`text-[#2B4464] hover:text-[#20C997] transition-all duration-300 ease-in-out ${activeLink === 'about' ? 'text-[#20C997]' : ''}`}
                onClick={() => handleLinkClick('about')}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/login"
                className={`text-[#2B4464] hover:text-[#20C997] transition-all duration-300 ease-in-out ${activeLink === 'contact' ? 'text-[#20C997]' : ''}`}
                onClick={() => handleLinkClick('contact')}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <AuroraBackground>
        <section className="min-h-screen flex items-center justify-center text-white px-4 py-20">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-12 md:space-y-0 md:space-x-12">
            {/* Text Section */}
            <div className="text-center ml-10 md:text-left md:w-1/2 px-4">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] mb-6">
                Welcome to <span className="text-[#70A5B2]">Dev</span><span>Nest!!</span>
              </h2>
              <p className="text-lg sm:text-xl text-[#A7C7E7] mb-8">
                <span className="block font-semibold text-[#FFFFFF]">
                  Real-Time Collaborations, Infinite Possibilities.
                </span>
                Break Barriers and work seamlessly with sockets-powered live sharing.
              </p>
              <a
                href="/login"
                className="inline-flex items-center bg-[#20C997] text-[#0A1B2F] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1a7f6f] transition-all duration-300 ease-in-out shadow-lg hover:shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2" />
              </a>
            </div>

            {/* Lottie Animation Section */}
            <div className="flex justify-center md:w-1/2 space-x-8">
              <div className="w-72 sm:w-96 h-72 md:h-96 scale-150 transition-all duration-300 ease-in-out">
                <Lottie
                  animationData={animationData}  // Pass the loaded JSON data here
                  loop={true}  // Loop the animation if necessary
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </AuroraBackground>
    </>
  );
};
