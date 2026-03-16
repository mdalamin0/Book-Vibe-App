import React from 'react';
import { useLoaderData } from 'react-router';
import { addBookToLocalStorage } from '../../Utilities/AddToLocalStorage';

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const { bookId, bookName, image, author, category, rating, tags, review, totalPages, yearOfPublishing, publisher } = bookDetails;

  const handleAddToReadList = (id) => {
    addBookToLocalStorage("readBooks", id)
  }

  const handleAddToWishList = (id) => {
    addBookToLocalStorage("wishBooks", id)
  }
  return (
    <div className='flex flex-col md:flex-row items-center gap-10 my-13'>
      <div className='md:w-1/2 bg-base-200 rounded-xl p-18'>
        <img src={image} alt="" className='md:h-[570px mx-auto rounded-xl object-cover' />

      </div>
      <div className='md:w-1/2'>
        <h1 className='text-4xl font-bold font-fair'>{bookName}</h1>
        <p className='text-lg font-medium text-gray-600 py-3'>By: {author}</p>
        <div className='border border-gray-300'></div>
        <p className='text-lg font-medium text-gray-600 py-3'>{category}</p>
        <div className='border border-gray-300'></div>
        <p className='py-6'><span className='font-bold text-lg'>Review:</span> <span className='font-semibold text-gray-600'>{review}</span></p>
        <div className='flex py-6'>
          <span className='font-bold text-lg mr-4'>Tag</span>
          {tags.map((tag, index) => <span key={index} className='text-[#23BE0A] bg-gray-200 mr-2 px-3 py-0.5 font-medium rounded-2xl'>#{tag}</span>)}
        </div>
        <div className='border border-gray-300'></div>

        <div className="py-3 font-semibold text-gray-600 overflow-x-auto">
          <table className="table">
            <tbody>
              <tr>
                <td>Number of Pages:</td>
                <td className='font-bold text-gray-900'>{totalPages}</td>
              </tr>
              <tr>
                <td>Publisher:</td>
                <td className='font-bold text-gray-900'>{publisher}</td>
              </tr>
              <tr>
                <td>Year of Publishing:</td>
                <td className='font-bold text-gray-900'>{yearOfPublishing}</td>
              </tr>
              <tr>
                <td>Rating:</td>
                <td className='font-bold text-gray-900'>{rating}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <button onClick={() => handleAddToReadList(bookId)} className='btn btn-outline border-gray-400 font-semibold'>Mark as Read</button>
          <button onClick={() => handleAddToWishList(bookId)} className='btn  
          px-4 py-2 rounded  font-semibold text-white cursor-pointer bg-[#59C6D2] ml-4'>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;