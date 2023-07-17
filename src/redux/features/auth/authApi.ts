import { SingUpFromData } from "../../../types/interface";
import { api } from "../../api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    singUpUser: builder.mutation({
      query: (data: SingUpFromData) => ({
        url: "/auth/singUp",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSingUpUserMutation } = authApi;
