import {Button, Col, Form, Row} from "react-bootstrap";
import {useForm} from "react-hook-form";
import BookCard from "../components/BookCard";
import {nanoid} from "@reduxjs/toolkit";
import {
    useAllAuthorsQuery,
    useAllBooksQuery,
    useAllEditionDatesQuery,
    useAllLiteraryMovementsQuery
} from "../redux/apis/library";
import {useMemo} from "react";

export default function Home() {

    const {data: authorList} = useAllAuthorsQuery();
    const {data: dateList} = useAllEditionDatesQuery();
    const {data: movementList} = useAllLiteraryMovementsQuery();
    const {data: bookList, isLoading} = useAllBooksQuery();

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

    const {register, handleSubmit} = useForm();
    const onSubmit = ({keyword}) => console.log(keyword)

    return (
        <>
            <Row>
                <Col>
                    <h2>Acceuil</h2>
                </Col>
                <Col className='col-auto'>
                    <a href={'#/book/create'}>Creer un livre</a>
                </Col>
                <Col className='col-auto'>
                    <a href={'#/author/create'}>Creer un Auteur</a>
                </Col>
            </Row>


            <Form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col className='clo-8'>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Rechercher ..." {...register('keyword')}/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button type='submit'>
                            ok
                        </Button>
                    </Col>
                </Row>
            </Form>




            {
                isLoading && 'Loading'
            }

            {
                books && books.length===0 && 'Aucun livre'
            }
            <Row>
                {
                    books && books.map(book => {
                        return (
                            <BookCard key={nanoid()} book={book}/>
                        )
                    })
                }

            </Row>

        </>
    )
}