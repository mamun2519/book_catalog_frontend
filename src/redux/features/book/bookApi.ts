/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../../../types/interface";
import { api } from "../../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getALLBook: builder.query({
      query: () => "/books",
      providesTags: ["books"],
    }),
    getSearchedBooks: builder.query({
      query: (query) => `/books?${query}`,
    }),
    filterBooks: builder.query({
      query: (query) => `/books?${query}`,
    }),
    bookDetails: builder.query({
      query: (id: string) => `/books/${id}`,
      providesTags: ["deleteBook", "review"],
    }),
    addBook: builder.mutation({
      query: (data: IBook) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["books"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["deleteBook"],
    }),
    addBooComment: builder.mutation({
      query: (data) => ({
        url: "/books/add-review",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
  }),
});
export const {
  useGetALLBookQuery,
  useBookDetailsQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
  useAddBooCommentMutation,
  useGetSearchedBooksQuery,
  useFilterBooksQuery,
} = bookApi;
