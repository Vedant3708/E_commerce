import React from 'react';
import {Link} from 'react-router-dom';
const Front = () => {
  return (
    <main className="flex-grow p-6 bg-gray-100">
    <section className="text-center mb-8">
      <h2 className="text-3xl font-semibold mb-4 text-blue-700">Welcome to Bail Recknor</h2>
      <p className="text-lg mb-6">
        Your trusted partner in bail and legal support services. We provide comprehensive assistance to help navigate the bail process efficiently and effectively.
      </p>
      <p className="text-lg mb-6">
        Whether you're a prisoner in need of support, a legal aid provider, or someone looking for information, we've got you covered.
      </p>
      <Link to="/signup" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
        Get Started
      </Link>
    </section>

    <section className="text-center">
      <h3 className="text-xl font-semibold mb-4 text-blue-700">Our Services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="service-card bg-white p-4 shadow-md rounded">
          <h4 className="text-md font-semibold mb-2">Bail Assistance</h4>
          <p>Expert help to understand and manage bail processes.</p>
        </div>
        <div className="service-card bg-white p-4 shadow-md rounded">
          <h4 className="text-md font-semibold mb-2">Legal Advice</h4>
          <p>Consult with experienced legal professionals for guidance.</p>
        </div>
        <div className="service-card bg-white p-4 shadow-md rounded">
          <h4 className="text-md font-semibold mb-2">Prisoner Support</h4>
          <p>Resources and assistance for prisoners and their families.</p>
        </div>
      </div>
    </section>
    <section className="text-center mb-12 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-2xl font-semibold mb-4 text-blue-800">What Our Clients Say</h3>
        <div className="flex flex-col items-center space-y-6">
          <blockquote className="bg-white p-4 shadow-md rounded-lg max-w-md">
            <p className="text-gray-600">"Bail Recknor provided exceptional support during a challenging time. Their expertise and compassion made all the difference." - Jane D.</p>
          </blockquote>
          <blockquote className="bg-white p-4 shadow-md rounded-lg max-w-md">
            <p className="text-gray-600">"The legal advice I received was clear and actionable. I felt well-informed and supported throughout the process." - John S.</p>
          </blockquote>
        </div>
      </section>
      <section className=" mb-7">
        <h3 className="text-2xl ml-60 font-semibold mb-6 text-blue-800">Frequently Asked Questions</h3>
        <div className="bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto">
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-blue-700">What is bail assistance?</h4>
            <p className="text-gray-600">Bail assistance involves helping individuals understand and manage the bail process, ensuring they can secure release from custody as efficiently as possible.</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold text-blue-700">How can I get legal advice?</h4>
            <p className="text-gray-600">You can get legal advice by scheduling a consultation with our experienced legal professionals who will guide you through your case.</p>
          </div>
        </div>
      </section>
  </main>
  );
};

export default Front;
