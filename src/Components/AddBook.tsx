import axios from "axios";
import { useState, ChangeEvent } from "react";
import { IBook } from "../Interfaces";
import { API_URL } from "../config";
import { Button } from "react-bootstrap";

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
    <div className="add-book-container">
      <h1>* Add book here *</h1>
      <div className="add-book-form">
        <label className="update-label">Book Title:</label>
        <input
          type="text"
          name="book"
          placeholder="Title"
          value={book}
          onChange={handleChange}
        />
        <label className="update-label">Book Author:</label>
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={author}
          onChange={handleChange}
        />
        <label className="update-label">Pages:</label>
        <input
          type="number"
          name="pages"
          value={pages}
          onChange={handleChange}
        />
        <label className="update-label">Image:</label>
        <input type="text" name="image" value={image} onChange={handleChange} />
        <Button
          variant="success"
          size="lg"
          style={{ marginTop: "10px" }}
          onClick={addBook}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddBook;
