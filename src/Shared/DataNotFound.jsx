import React from 'react';

const DataNotFound = ({bookName}) => {
  return (
    <div className='py-10 bg-base-200 rounded-xl my-5'>
      <h2 className='text-3xl font-bold text-center text-gray-700'>Don't added any {bookName} books yet!</h2>
    </div>
  );
};

export default DataNotFound;