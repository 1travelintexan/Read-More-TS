import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import { IBook } from "./Interfaces";

const App: FC = () => {
  const [book, setBook] = useState<string>("");
  const [pages, setPages] = useState<number>(0);
  const [bookList, setBookList] = useState<IBook[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "book") {
      setBook(event.target.value);
    } else {
      setPages(Number(event.target.value));
    }
  };

  const addBook = (): void => {
    const newBook = {
      bookName: book,
      pages: pages,
    };
    setBook("");
    setPages(0);
    setBookList([...bookList, newBook]);
  };

  const bookRead = (bookRead: string): void => {
    let filteredBooks = bookList.filter((book) => {
      return book.bookName !== bookRead;
    });
    setBookList(filteredBooks);
  };

  return (
    <div className="app">
      <Navbar />
      <h3>Add a book here</h3>
      <div className="header">
        <div className="input-container">
          <label>Book Title:</label>
          <input
            type="text"
            name="book"
            placeholder="Title"
            value={book}
            onChange={handleChange}
          />
          <label>Book Auther:</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            // value={author}
            onChange={handleChange}
          />
          <label>Pages:</label>
          <input
            type="number"
            name="pages"
            value={pages}
            onChange={handleChange}
          />
        </div>
        <button onClick={addBook}>Add Book</button>
      </div>
      <h3>Your BookList:</h3>
      <div className="bookList">
        {bookList.map((book: IBook, i: number) => {
          return <BookList key={i} book={book} bookRead={bookRead} />;
        })}
      </div>
    </div>
  );
};

export default App;
