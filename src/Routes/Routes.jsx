import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/BookDetails/BookDetails";
import axios from "axios";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch('/booksData.json'),
        Component: Home
      },
      {
        path:'listed-books',
        Component: ListedBooks,
        loader: async () => {
          const res = await axios.get('/booksData.json');
          return res.data;
        }
      },
      {
        path: '/bookDetails/:bookId',
        loader: async ({ params }) => {
          const res = await axios.get('/booksData.json');
          const bookDetails = res.data.find(book => book.bookId === parseInt(params.bookId));
          return bookDetails;

        },
        Component: BookDetails
      }
    ]
  }
])