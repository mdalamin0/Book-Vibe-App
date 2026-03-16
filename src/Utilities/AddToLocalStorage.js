import { toast } from "react-toastify";

const getBookFromLocalStorage = (key) => {
  const storedBookString = localStorage.getItem(key);

  if (storedBookString) {
    const storedBook = JSON.parse(storedBookString);
    return storedBook
  }
  else {
    return []
  }
}


const saveBookToLocalStorage = (key, book) => {
  const bookStrigified = JSON.stringify(book);
  localStorage.setItem(key, bookStrigified)
  toast.success("Successfully added this book!")
}

const addBookToLocalStorage = (key, id) => {
  const storedBookIds = getBookFromLocalStorage(key);
  if (storedBookIds.includes(id)) {
    toast.error("Already added this book!");
    return
  }
  const newStoreBook = [...storedBookIds, id]
  saveBookToLocalStorage(key, newStoreBook)
}

export { addBookToLocalStorage, getBookFromLocalStorage }
