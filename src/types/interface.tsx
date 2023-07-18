export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  picture: {
    url: string;
  };
  reviews?: [];
}

export type LoginFromData = {
  email: string;
  password: number;
};

export type SingUpFromData = {
  name: string;
  email: string;
  password: number;
  picture: {
    url: string;
  };
};

export type Reviews = {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  comment: string;
  _id: string;
};

export type wishList = {
  _id: string;
  book: IBook;
  user: string;
};
