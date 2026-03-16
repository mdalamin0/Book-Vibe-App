import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
  const { bookId, bookName, image, author, category, rating, tags } = book;

  return (
    <Link to={`/bookDetails/${bookId}`}>
    <div className="card bg-base-100  shadow-sm p-3 border border-gray-200">
      <figure className='bg-base-200 py-10 rounded-xl'>
        <img
          src={image}
          className='h-42 object-cover'
          alt="Book" />
      </figure>
      <div className="card-body">
        <div className='flex'>
          {tags.map(tag => <span className='text-[#23BE0A] bg-gray-200 mr-2 px-3 py-0.5 font-medium rounded-2xl'>{tag}</span>)}
        </div>
        <h2 className="text-xl font-bold font-fair">
          {bookName}
        </h2>
        <p className='pb-3 text-gray-600 font-medium text-[16px]'>By: {author}</p>
        <div className="card-actions justify-between items-center text-gray-600 font-medium border-t-2 border-dashed text-[16px] border-gray-400 pt-3">
          <div className="">
            <p>{category}</p>
          </div>
          <div className="">
            <p className='flex items-center'>{rating} <Star className='ml-1' size={18} /></p>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;