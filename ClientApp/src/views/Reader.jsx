import {useParams} from "react-router-dom";
import React, {useMemo} from 'react';
import PDFViewer from 'pdf-viewer-reactjs'
import {
    useAllAuthorsQuery,
    useAllBooksQuery,
    useAllEditionDatesQuery,
    useAllLiteraryMovementsQuery
} from "../redux/apis/library";

export default function Reader() {
    const {bookId} = useParams()

    const {data: authorList} = useAllAuthorsQuery();
    const {data: dateList} = useAllEditionDatesQuery();
    const {data: movementList} = useAllLiteraryMovementsQuery();
    const {data: bookList} = useAllBooksQuery();

    const books = useMemo(() => {
        /**
         *
         * @type {Book[]}
         */
        let book = []
        if (
            authorList && authorList.length !== 0 &&
            dateList && dateList.length !== 0 &&
            movementList && movementList.length !== 0 &&
            bookList && bookList.length !== 0
        ) {
            book = bookList.map(one => ({
                id: one.id,
                name: one.name,
                isbn: one.isbn,
                uri: one.uri,
                author: authorList.find(author => author.id === one.authorId),
                publishedAt: dateList.find(date => date.id === one.dateId),
                literaryMovement: movementList.find(movement => movement.id === one.movementId),
            }))
        }

        return book ?? []
    }, [authorList, dateList, movementList, bookList])
    const book = books.find(one => {
        console.log(one.id, Number(bookId), one.id === Number(bookId))
        return one.id === Number(bookId)
    })
    const uri = book && book.uri;

    console.log(books)
    console.log(uri)

    return (
        <div>
            {
                !uri && 'Loading'
            }

            {
                uri && (
                    <PDFViewer
                        document={{
                            url: uri,
                        }}
                    />
                )
            }
        </div>
    );
}