import { MapPin, StickyNote, Users } from 'lucide-react';
import { Link } from 'react-router';

const ListedBookCard = ({ book }) => {
  const { bookId, bookName, author, image, tags, yearOfPublishing, publisher, totalPages, category, rating } = book;
  return (
    <div className='flex flex-col md:flex-row items-center gap-4 md:gap-6 lg:gap-10 border border-gray-200 rounded-xl p-4 my-5'>
      <div className='bg-base-200 p-8 rounded-xl h-[230px] '>
        <img src={image} alt="book" className='w-32 object-cover h-[172px]' />
      </div>
      <div className='space-y-3 md:flex-grow'>
        <h1 className='text-2xl md:text-3xl font-bold font-fair'>{bookName}</h1>
        <p className='text-lg font-medium text-gray-600 '>By: {author}</p>
        <div className='flex flex-col md:flex-row md:items-center md:flex-wrap gap-2'>
          <div>
          <span className='font-bold text-lg mr-4'>Tag</span>
            {tags.map((tag, index) => <span key={index} className='text-[#23BE0A] bg-gray-200 mr-2 px-3 py-0.5 font-medium rounded-2xl'>#{tag}</span>)}
          </div>
          <p className='flex items-center  text-gray-600'> <span><MapPin size={25} className='mr-1' /></span> Year of Publishing: {yearOfPublishing}</p>
        </div>
        <div className='flex flex-wrap text-gray-600 gap-3 md:gap-6'>
          <p className='flex items-center'><span className='mr-2'><Users size={24} /></span> Publisher: {publisher}</p>
          <p className='flex items-center'> <span className='mr-2'><StickyNote size={24} /></span> Page {totalPages}</p>
        </div>
        <div className='border border-gray-200'></div>
        <div className='flex flex-wrap items-center gap-3'>
          <p className=' text-[#328EFF] bg-[#E0EEFF] px-4 py-1 rounded-full'>Category: {category}</p>
          <p className=' text-[#FFAC33] bg-[#FFF3E1] px-4 py-1 rounded-full'>Rating: {rating}</p>
          <Link to={`/bookDetails/${bookId}`} className=' text-gray-100 bg-[#23BE0A] hover:bg-[#2aab16] duration-300 px-4 py-1 rounded-full '>View Details</Link>

        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;