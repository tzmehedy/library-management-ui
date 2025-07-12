import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const bookApis = createApi({
  reducerPath: "bookApis",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://library-management-server-omega-hazel.vercel.app/",
    baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["books"],
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: ({limit})=> `api/books?limit=${limit}`,
      providesTags: ["books"],
    }),
    getAllBooksByPagination: build.query({
      query: ({page,size }) => ({
        url: `api/books?page=${page}&&size=${size}`,
      }),
      providesTags: ["books"],
    }),
    createBook: build.mutation({
      query: (body) => ({
        url: "api/books",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),
  }),
});

export const {useGetAllBooksByPaginationQuery, useGetAllBooksQuery, useCreateBookMutation} = bookApis