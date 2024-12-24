import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold mb-4 text-indigo-500">404</h1>
        <p className="text-2xl mb-6 opacity-75">Sorry, the page you are looking for does not exist.</p>
        <Link
          to="/"
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-indigo-500 transition-all duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
