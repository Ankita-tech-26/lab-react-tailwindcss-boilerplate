// src/components/Features.jsx
import React from 'react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7h3v13h6v-6h2v6h6V7h3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Feature One</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7h3v13h6v-6h2v6h6V7h3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Feature Two</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="mb-4">
                <svg className="w-12 h-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7h3v13h6v-6h2v6h6V7h3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Feature Three</h3>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
