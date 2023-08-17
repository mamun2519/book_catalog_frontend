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
  userId: string | null;
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

export type readList = {
  _id: string;
  book: IBook;
  user: string;
  reading: boolean;
  complete: boolean;
  readSoon: boolean;
};

export interface ICredential {
  user: string | null;
  token: string | null;
  password?: string | null;
}
