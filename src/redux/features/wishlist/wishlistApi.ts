/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { api } from "../../api/apiSlice";

const wishlistApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getALLWishList: builder.query({
      query: () => `/wishlist`,

      providesTags: ["wishList"],
    }),

    addWishlist: builder.mutation({
      query: (data) => ({
        url: "/wishlist",
        method: "POST",
        body: data,
      }),
    }),

    deleteWishList: builder.mutation({
      query: (id: string) => ({
        url: `/wishlist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["wishList"],
    }),
  }),
});
export const {
  useGetALLWishListQuery,
  useAddWishlistMutation,
  useDeleteWishListMutation,
} = wishlistApi;
