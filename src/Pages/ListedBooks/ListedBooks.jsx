import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getBookFromLocalStorage } from '../../Utilities/AddToLocalStorage';
import ReadListedBook from '../../components/ReadListedBook/ReadListedBook';
import { ChevronDown } from 'lucide-react';
import WishlistedBook from '../../components/WishlistedBook/WishlistedBook';
import DataNotFound from '../../Shared/DataNotFound';

const ListedBooks = () => {
  const booksData = useLoaderData();

  const [readBooks, setReadBooks] = useState([]);
  const [wishBooks, setWishBooks] = useState([]);

  useEffect(() => {
    // get read books data from local storage
    const getStoredReadBooks = getBookFromLocalStorage("readBooks");
    const readListedData = booksData.filter(book => getStoredReadBooks.includes(book.bookId));
    // get wish listed books form local storage
    const getStoredWishlistedBooks = getBookFromLocalStorage("wishBooks");
    const wishlistedData = booksData.filter(book => getStoredWishlistedBooks.includes(book.bookId));
    setReadBooks(readListedData);
    setWishBooks(wishlistedData);

  }, [booksData])


  // Sort by rating, page number and publish year
  const handleSort = (type) => {
    if (type === "rating") {
      const sortedByRatingReadBooks = [...readBooks].sort((a, b) => b.rating - a.rating)
      const sortedByRatingWishlistBooks = [...wishBooks].sort((a, b) => b.rating - a.rating);
      setReadBooks(sortedByRatingReadBooks)
      setWishBooks(sortedByRatingWishlistBooks)
    }
    if (type === "pages") {
      const sortedByPagesReadBooks = [...readBooks].sort((a, b) => b.totalPages - a.totalPages)
      const sortedByPagesWishlistBooks = [...wishBooks].sort((a, b) => b.totalPages - a.totalPages);
      setReadBooks(sortedByPagesReadBooks)
      setWishBooks(sortedByPagesWishlistBooks)
    }
    if (type === "yearOfPublishing") {
      const sortedByPublishReadBooks = [...readBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
      const sortedByPublishWishlistBooks = [...wishBooks].sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setReadBooks(sortedByPublishReadBooks)
      setWishBooks(sortedByPublishWishlistBooks)
    }

  }


  return (
    <div>
      <div className='text-center bg-base-200 py-7 md:py-10 rounded-xl mb-10'>
        <h2 className='text-2xl md:text-3xl font-bold'>Books</h2>
      </div>
      <div className='text-center'>
        <details className="dropdown text-center">
          <summary className='btn bg-[#23BE0A] hover:bg-[#2aab16] duration-300 text-gray-100 mb-2'>Sort By <ChevronDown /></summary>
          <ul className="menu dropdown-content bg-base-200 rounded-box z-1 w-52 p-2 shadow-lg">
            <li onClick={() => handleSort("rating")}><a >Rating</a></li>
            <li onClick={() => handleSort("pages")}><a>Number of Pages</a></li>
            <li onClick={() => handleSort("yearOfPublishing")}><a>Publish Year</a></li>
          </ul>
        </details>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          {
            readBooks.length === 0 ? <DataNotFound bookName={"Read List"} /> : <div>
              {
                readBooks.map(book => <ReadListedBook key={book.bookId} book={book}></ReadListedBook>)
              }
            </div>
          }
        </TabPanel>
        <TabPanel>
          {
            wishBooks.length === 0 ? <DataNotFound bookName={"Wishlist"} /> : <div>
              {
                wishBooks.map(book => <WishlistedBook key={book.bookId} book={book}></WishlistedBook>)
              }
            </div>
          }
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;