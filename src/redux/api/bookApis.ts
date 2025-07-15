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
      query: ({ limit }) => `api/books?limit=${limit}`,
      providesTags: ["books"],
    }),
    getAllBooksByPagination: build.query({
      query: ({ page, size }) => ({
        url: `api/books?page=${page}&&size=${size}`,
      }),
      providesTags: ["books"],
    }),

    getBookById: build.query({
      query: (id) => `api/books/${id}`,
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

    deleteBook: build.mutation({
      query: (id) => ({
        url: `api/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["books"],
    }),

    updateBook: build.mutation({
      query: ({ body, id }) => ({
        url: `/api/books/${id}`,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["books"],
    }),

    createBorrow: build.mutation({
      query: (body) => ({
        url: "/api/borrow",
        method: "POST",
        body,
      }),
      invalidatesTags: ["books"],
    }),

    borrowSummary: build.query({
      query: () => "/api/borrow",
      providesTags: ["books"]
    })
  }),
});

export const {
  useGetAllBooksByPaginationQuery,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useCreateBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
  useCreateBorrowMutation,
  useBorrowSummaryQuery,
} = bookApis;

