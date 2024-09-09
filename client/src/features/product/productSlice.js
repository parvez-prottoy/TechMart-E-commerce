import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, PRODUCTS_URL } from "../../constants/apiUrl";

const productSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      providesTags: ["Products"],
      keepUnusedDataFor: 600,
    }),
  }),
});
export const { useGetProductsQuery } = productSlice;
export default productSlice;
