import { MapPin, StickyNote, Users } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import ListedBookCard from '../../Shared/ListedBookCard';

const ReadListedBook = ({ book }) => {
  return (
   <>
   <ListedBookCard book={book}></ListedBookCard>
   </>
  );
};

export default ReadListedBook;