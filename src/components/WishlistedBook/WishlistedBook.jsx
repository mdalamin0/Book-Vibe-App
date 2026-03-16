import React from 'react';
import ListedBookCard from '../../Shared/ListedBookCard';

const WishlistedBook = ({book}) => {
  return (
    <div>
      <ListedBookCard book={book}></ListedBookCard>
    </div>
  );
};

export default WishlistedBook;