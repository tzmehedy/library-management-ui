import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const bookApis = createApi({
  reducerPath: "bookApis",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://library-management-server-omega-hazel.vercel.app/api/",

    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => "books",
    }),
  }),
});

export const {useGetAllBooksQuery} = bookApis