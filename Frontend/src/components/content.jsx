import React from 'react'
const Content = () => {
  return (
<div className=' bg-gray-100 flex justify-start min-h-screen'>
    <div className='w-2/6 h-3/5 bg-white rounded-lg shadow-lg mt-6 ml-2 p-6'>
    <h2 className='text-2xl font-bold text-center mb-4'>Prisoner Information</h2>
    <div className='space-y-4'>
      <div className='flex space evenly'>
        <p className='font-semibold text-black'>Name: </p>
        <p className='text-gray-900'>John Doe</p>
      </div>
      <div className='flex space evenly'>
        <p className='font-semibold text-black'>ID Number:</p>
        <p className='text-gray-900'>123456</p>
      </div>
      <div className='flex space evenly'>
        <p className='font-semibold text-black'>Date of Birth:</p>
        <p className='text-gray-900'>January 1, 1980</p>
      </div>
      <div className='flex space evenly'>
        <p className='font-semibold text-black'>City:</p>
        <p className='text-gray-900'>XXX</p>
      </div>
      <div className='flex space evenly'>
        <p className='font-semibold text-black'>State:</p>
        <p className='text-gray-900'>ABC</p>
      </div>
      <div className='flex space evenly'>
        <p className='font-semibold text-black'>Sentence:</p>
        <p className='text-gray-900'>25 years</p>
      </div>
      <div className='flex space evenly'>
        <p className='font-semibold text-black'>Cell Number:</p>
        <p className='text-gray-900'>C-42</p>
      </div>
    </div>
    <div className="w-full max-w-sm mt-10 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
      <h2 className="text-xl font-bold mb-2">Latest Updates</h2>
      <p className="text-gray-700 text-sm mb-4">
        Stay informed with the latest news and updates on law and judiciary in India.
      </p>
      <ul className="space-y-2">
        <li>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Supreme Court Ruling on Recent Case
          </a>
          <p className="text-gray-500 text-xs">August 28, 2024</p>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            New Amendments in the Criminal Code
          </a>
          <p className="text-gray-500 text-xs">August 25, 2024</p>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            Upcoming Legal Reforms Discussion
          </a>
          <p className="text-gray-500 text-xs">August 22, 2024</p>
        </li>
      </ul>
    </div>
    </div>
    <div className='bg-gray-100 flex flex-col items-center p-6'>
      {/* Hero Section */}
      <section className='w-full max-w-6xl bg-blue-500 text-white rounded-lg shadow-lg p-8 mb-6'>
        <h1 className='text-4xl font-bold mb-4'>Welcome to Bail Reckoner</h1>
        <p className='text-lg mb-4'>
          Empowering you with accurate and timely information for bail processing.
        </p>
        <button className='bg-yellow-500 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-400 transition'>
          Get Started
        </button>
      </section>

      {/* Information Sections */}
      <section className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='bg-white rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-bold mb-4'>Calculate Bail Amount</h2>
          <p className='text-gray-700 mb-4'>
            Use our intuitive bail calculator to estimate the bail amount based on various factors.
          </p>
          <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-400 transition'>
            Try the Calculator
          </button>
        </div>

        <div className='bg-white rounded-lg shadow-lg p-6'>
          <h2 className='text-2xl font-bold mb-4'>Understand Bail Procedures</h2>
          <p className='text-gray-700 mb-4'>
            Learn about the steps involved in the bail process and what you need to prepare.
          </p>
          <button className='bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-400 transition'>
            Learn More
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='w-full bg-white rounded-lg shadow-lg p-6 mt-6'>
        <h2 className='text-2xl font-bold mb-4'>What Our Users Say</h2>
        <div className='space-y-4'>
          <div className='border-l-4 border-blue-500 pl-4'>
            <p className='font-semibold'>Jane Smith</p>
            <p className='text-gray-600'>
              "The bail calculator was a lifesaver! It made the process so much easier to understand."
            </p>
          </div>
          <div className='border-l-4 border-blue-500 pl-4'>
            <p className='font-semibold'>Michael Johnson</p>
            <p className='text-gray-600'>
              "I appreciate the clear instructions and helpful resources. The bail reckoner is a great tool."
            </p>
          </div>
        </div>
      </section>
    </div>

  </div>

  );
};

export default Content;
