import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const bookApis = createApi({
  reducerPath: "bookApis",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-server-omega-hazel.vercel.app/",

    // baseUrl: "http://localhost:5000",
  }),
  tagTypes: ["books"],
  endpoints: (build) => ({
    getAllBooks: build.query({
      query: () => "api/books",
      providesTags:["books"]
    }),
    createBook: build.mutation({
      query: (body)=>({
        url: "api/books",
        method: "POST",
        body
      }),
      invalidatesTags: ["books"]
    })
  }),
});

export const {useGetAllBooksQuery, useCreateBookMutation} = bookApis