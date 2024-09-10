import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, PRODUCTS_URL } from "../../constants/apiUrl";

const productSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["Products", "Products"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => PRODUCTS_URL,
      providesTags: ["Products"],
      keepUnusedDataFor: 600,
    }),
    getProduct: builder.query({
      query: (id) => `${PRODUCTS_URL}/${id}`,
      providesTags: (result, error, arg) => [{ type: "Video", id: arg }],
    }),
  }),
});
export const { useGetProductsQuery, useGetProductQuery } = productSlice;
export default productSlice;
