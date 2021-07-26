import {Card, Col, OverlayTrigger, Popover, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";

/**
 *
 * @param book {Book}
 * @returns {JSX.Element}
 * @constructor
 */
export default function BookCard({book}) {
    const location = useHistory()
    console.log(book)

    const handleOpen = () => {
        location.push(`/reader/${book.id}`)
    }

    const Details = () => {
        return (
            <Popover id={`popover-positioned-${book.id}`}>
                <Popover.Header as="h3">{book.name} + info</Popover.Header>
                <Popover.Body>
                    <p>ISBN: {book.isbn}</p>
                    <p>Année d’éditions: {book.publishedAt.date}</p>
                </Popover.Body>
            </Popover>
        )
    }

    return (
        <Col md={5} style={{cursor: "pointer"}} onClick={handleOpen}>
            <OverlayTrigger placement={'top-end'} overlay={Details}>
                <Card className='p-2'>
                    <Card.Body>
                        <Row>
                            <Col>
                                <Row>
                                    {book.name}
                                </Row>
                                <Row>
                                    {`${book.literaryMovement.name} - ${book.author.name}`}
                                </Row>
                            </Col>

                            <Col className='col-auto ml-auto '>
                                <Row className='mt-4'>
                                    {book.publishedAt.date}
                                </Row>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </OverlayTrigger>
        </Col>
    )
}