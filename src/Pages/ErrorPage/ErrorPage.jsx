import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className='flex flex-col justify-center items-center my-auto h-screen'>
      <h1 className='text-4xl font-bold'>404</h1>
      <h2 className='text-3xl font-bold '>Page not found!</h2>
      <Link to="/" className='mt-3 bg-[#23BE0A] text-white px-4 font-semibold py-2 rounded-xl hover:bg-[#27aa13] duration-75 btn'>Back to Home</Link>
    </div>
  );
};

export default ErrorPage;