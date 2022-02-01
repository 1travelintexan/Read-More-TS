import React from "react";
import { IBook } from "../Interfaces";

interface Props {
  book: IBook;
  bookRead(nameOfBook: string): void;
}
function BookList({ book, bookRead }: Props) {
  return (
    <div className="list">
      <div className="book">
        <span>{book.bookName}</span>
        <span>{book.pages} pages</span>
        <button
          onClick={() => {
            bookRead(book.bookName);
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default BookList;
