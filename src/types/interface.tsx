export interface IBook {
  Title: string;
  Author: string;
  genre: string;
  PublicationDate: string;
  url: string;
  Review: [];
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
