import Book from "../Book/Book";

const Books = ({booksData}) => {

  
  return (
    <div className="mt-10">
      <h2 className="text-center mb-10 text-3xl font-bold">Books: {booksData.length}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {booksData.map(book => <Book key={book.bookId} book={book}></Book>)}
      </div>
    </div>
  );
};

export default Books;