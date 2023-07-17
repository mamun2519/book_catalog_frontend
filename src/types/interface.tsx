export interface IBook {
  _id?: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  picture: {
    url: string;
  };
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
