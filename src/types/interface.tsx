export interface IBook {
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  url: string;
  Review?: [];
}

export type LoginFromData = {
  email: string;
  password: number;
};

export type SingUpFromData = {
  name: string;
  email: string;
  password: number;
};
