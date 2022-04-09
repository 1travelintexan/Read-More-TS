import axios from "axios";
import { useState, ChangeEvent } from "react";
import { IBook } from "../Interfaces";
import { API_URL } from "../config";

function AddBook() {
  const [book, setBook] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [pages, setPages] = useState<number>(0);
  const [image, setImage] = useState<string>("");
  const [bookList, setBookList] = useState<IBook[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "book") {
      setBook(event.target.value);
    } else if (event.target.name === "author") {
      setAuthor(event.target.value);
    } else {
      setPages(Number(event.target.value));
    }
  };

  const addBook = async () => {
    const newBook = {
      bookName: book,
      bookAuthor: author,
      pages: pages,
      image: image,
    };
    console.log("here is the new book", newBook);
    let response = await axios.post(`${API_URL}/api/addbook`, newBook, {
      withCredentials: true,
    });
    console.log("here is the data", response.data);
    setBook("");
    setPages(0);
    setAuthor("");
    setImage("");
    setBookList([...bookList, newBook]);
  };

  //   const bookRead = (bookRead: string): void => {
  //     let filteredBooks = bookList.filter((book) => {
  //       return book.bookName !== bookRead;
  //     });
  //     setBookList(filteredBooks);
  //   };

  return (
    <div>
      {" "}
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
          <label>Book Author:</label>
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={author}
            onChange={handleChange}
          />
          <label>Pages:</label>
          <input
            type="number"
            name="pages"
            value={pages}
            onChange={handleChange}
          />
          <label>Image:</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
          />
        </div>
        <button onClick={addBook}>Add Book</button>
      </div>
    </div>
  );
}

export default AddBook;
