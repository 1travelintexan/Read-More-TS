export interface IBook {
  bookName: string;
  bookAuthor: string;
  pages: number;
}

export interface User {
  _id: number;
  username: string;
  image: string;
}

export interface IProps {
  //here you can declare the return type (here is void)
  currentUser: User;
}
