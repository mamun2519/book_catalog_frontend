/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { IBook } from "../../../types/interface";
import { api } from "../../api/apiSlice";

const readListApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getALLreadList: builder.query({
      query: () => `/readList`,

      providesTags: ["readList", "updateList"],
    }),

    addReadlist: builder.mutation({
      query: (data) => ({
        url: "/readList",
        method: "POST",
        body: data,
      }),
    }),
    updateReadlist: builder.mutation({
      query: ({ data, id }) => ({
        url: `/readList/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["updateList"],
    }),

    deleteReadList: builder.mutation({
      query: (id: string) => ({
        url: `/readList/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["readList"],
    }),
  }),
});
export const {
  useGetALLreadListQuery,
  useAddReadlistMutation,
  useDeleteReadListMutation,
  useUpdateReadlistMutation,
} = readListApi;
