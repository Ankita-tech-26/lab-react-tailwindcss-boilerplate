import React from 'react';
import heroImage from '../assets/Kalvium-Logo.png';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      <img src={heroImage} alt="Hero" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative text-center bg-black bg-opacity-50 p-10 rounded">
        <h1 className="text-5xl font-bold mb-4 text-white">Welcome to Our Website</h1>
        <p className="text-xl mb-8 text-white">Building beautiful UIs with TailwindCSS</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;


