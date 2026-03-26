import React from 'react';
import BannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <>
      <section className='bg-base-200 p-16 rounded-2xl mt-4'>
        <div className='flex items-center flex-col-reverse md:flex-row gap-10'>
          <div className='md:w-1/2 lg:pl-36' >
            <h1 className='text-xl md:text-3xl lg:text-4xl font-bold font-fair '>Books to freshen up your bookshelf</h1>
            <button className="btn bg-[#23BE0A] text-white mt-5">View The List</button>
          </div>
          <div className='md:w-1/2'>
            <img src={BannerImg} alt="" className='mx-auto' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;