import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getALLBook: builder.query({
      query: () => "/books",
    }),
    bookDetails: builder.query({
      query: (id: string) => `/books/${id}`,
    }),
  }),
});
export const { useGetALLBookQuery, useBookDetailsQuery } = bookApi;
