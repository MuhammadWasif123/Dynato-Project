"use client"

import { useState, useEffect } from 'react';

const BenefitsSection = () => {
  const [typedText, setTypedText] = useState('');
  const benefitsText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim vel elit in tempus.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index === benefitsText.length) {
        clearInterval(typingInterval);
      } else {
        setTypedText(prevText => prevText + benefitsText.charAt(index));
        index++;
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="heading text-4xl font-bold mb-10">Our Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Benefit Item 1 */}
          <div className="bg-toggle-benefit rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-blue-500 rounded-full p-3 mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
            <p className="text-center">{typedText}</p>
          </div>
        {/* Benefit Item 2 */}
          <div className="bg-toggle-benefit rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-blue-500 rounded-full p-3 mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy Returns</h3>
            <p className="text-center">{typedText}</p>
          </div>

          {/* Benefit Item 3 */}
          <div className="bg-toggle-benefit rounded-lg p-6 flex flex-col items-center transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
            <div className="bg-blue-500 rounded-full p-3 mb-4">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Quality Products</h3>
            <p className="text-center">{typedText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;





  