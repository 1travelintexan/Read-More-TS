import { useEffect, useState } from "react";
import { IBook } from "../Interfaces";
import axios from "axios";
import { API_URL } from "../config";

function BookList() {
  type Book = {
    _id: number;
    bookName: string;
    bookAuthor: string;
    pages: number;
  };
  const [allBooks, setAllBooks] = useState<Book[] | null>(null);
  useEffect(() => {
    try {
      const getBooks = async () => {
        let data = await axios.get<Book[]>(`${API_URL}/book-list`, {
          withCredentials: true,
        });
        let books = data.data;
        await setAllBooks(books);
        console.log("here are all the books", books);
      };
      getBooks();
    } catch (err) {
      console.log(err, "error getting books");
    }
  }, []);

  return (
    <div className="booklist">
      <h3>Your Book list:</h3>
      <div className="list">
        <div className="bookListContainer">
          {allBooks ? (
            allBooks.map((elem: Book, i: number) => {
              return (
                <>
                  <div className="book">
                    <span id="bookTitle">{elem.bookName}</span>
                    <span>By: {elem.bookAuthor}</span>
                    <span>{elem.pages} pages</span>
                  </div>
                  <button>X</button>
                </>
              );
            })
          ) : (
            <p>Loading...</p>
          )}

          {/* {
        allBooks.map((elem, i)=>{
          return (
            <div className="book"> 
            <span id="bookTitle">{elem.bookName}</span>
            <span>By: {elem.bookAuthor}</span>
            <span>{elem.pages} pages</span>
            </div>
              <button>
            X
          </button>
          )
        })
        }  */}
        </div>
      </div>
    </div>
  );
}

export default BookList;
