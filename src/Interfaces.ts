export interface IBook {
  bookName: string;
  bookAuthor: string;
  pages: number;
}

export interface User {
  _id: number;
  username: string;
  email: string;
  imageUrl: string;
}

export interface IProps {
  //here you can declare the return type (here is void)
  currentUser: User;
}

export interface FuncProps {
  //here you can declare the return type (here is void)
  onSignUp: (props: {
    username: string;
    password: string;
    email: string;
  }) => void;
}
