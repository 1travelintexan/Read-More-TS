import { IBook } from "../Interfaces";

interface Props {
  book: IBook;
  bookRead(nameOfBook: string): void;
}
function BookList() {
  return (
    <>
      <h3>Your BookList:</h3>
      <div className="list">
        <div className="bookListContainer">
          {/* <div className="book"> */}
          {/* <span id="bookTitle">{book.bookName}</span>
            <span>By: {book.bookAuthor}</span>
            <span>{book.pages} pages</span>
          </div>
          <button
            onClick={() => {
              bookRead(book.bookName);
            }}
          >
            X
          </button> */}
        </div>
      </div>
    </>
  );
}

export default BookList;
