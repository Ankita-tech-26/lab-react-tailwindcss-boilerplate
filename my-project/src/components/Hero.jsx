import React from 'react';
import heroImage from 'https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png';

const Hero = () => {
  return (
    <div 
      className="bg-cover bg-center h-screen text-white flex items-center justify-center" 
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="text-center bg-black bg-opacity-50 p-10 rounded">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl mb-8">Building beautiful UIs with TailwindCSS</p>
        <button className="bg-white text-blue-500 px-6 py-3 rounded-full text-lg font-semibold">Get Started</button>
      </div>
    </div>
  );
}

export default Hero;

