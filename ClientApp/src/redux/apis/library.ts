import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Author, Book, EditionDate, LiteraryMovement} from "../types";
import {
    BASE_SERVER_URI,
    BOOK_GET_ALL_AUTHORS, BOOK_GET_ALL_BOOKS,
    BOOK_GET_ALL_EDITION_DATES,
    BOOK_GET_ALL_LITERARY_MOVEMENTS
} from "../constants";

// Define a service using a base URL and expected endpoints
export const libraryApi = createApi({
    reducerPath: 'libraryApi',
    baseQuery: fetchBaseQuery({baseUrl: BASE_SERVER_URI}),
    endpoints: (builder) => ({
        allAuthors: builder.query<Author[], string>({
            query: (name) => BOOK_GET_ALL_AUTHORS,
        }),
        allEditionDates: builder.query<EditionDate[], string>({
            query: (name) => BOOK_GET_ALL_EDITION_DATES,
        }),
        allLiteraryMovements: builder.query<LiteraryMovement[], string>({
            query: (name) => BOOK_GET_ALL_LITERARY_MOVEMENTS,
        }),
        allBooks: builder.query<Book[], string>({
            query: (name) => BOOK_GET_ALL_BOOKS,
        }),
    }),
})


// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useAllAuthorsQuery, useAllEditionDatesQuery, useAllLiteraryMovementsQuery, useAllBooksQuery} = libraryApi
