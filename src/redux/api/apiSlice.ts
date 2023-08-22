/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
export const api = createApi({
  reducerPath: "api",
  tagTypes: [
    "deleteBook",
    "review",
    "wishList",
    "readList",
    "updateList",
    "books",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      const token = (getState() as RootState).auth.token;

      // If the token exists, add it to the headers
      if (token) {
        headers.set("Authorization", `${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
