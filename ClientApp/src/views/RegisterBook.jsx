import {Button, Form} from "react-bootstrap";
import {useAllAuthorsQuery, useAllEditionDatesQuery, useAllLiteraryMovementsQuery} from "../redux/apis/library";
import {useMemo} from "react";
import {BOOK_CREATION_URI} from "../redux/constants";

export default function RegisterBook() {

    //====================================

    const {data: authorList} = useAllAuthorsQuery();

    const authors = useMemo(() => {
        return (authorList && authorList.map(one => ({value: one.id, label: one.name}))) ?? [];
    }, [authorList])

    //====================================

    const {data: dateList} = useAllEditionDatesQuery();

    const editionDates = useMemo(() => {
        return (dateList && dateList.map(one => ({value: one.id, label: one.date}))) ?? [];
    }, [dateList])

    //====================================

    const {data: movementList} = useAllLiteraryMovementsQuery();

    const movements = useMemo(() => {
        return (movementList && movementList.map(one => ({value: one.id, label: one.name}))) ?? [];
    }, [movementList])

    //====================================


    return (
        <Form method='post' action={BOOK_CREATION_URI}>

            <h2 className='mb-7'>Creation de livre</h2>

            <Form.Group className="mb-3">
                <Form.Label>Titre du livre</Form.Label>
                <Form.Control type="text" placeholder="..." name={'title'} required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>ISBN</Form.Label>
                <Form.Control type="text" placeholder="..." name={'isbn'}  required/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Courant littéraire </Form.Label>
                <Form.Select type="text" name={'literaryMovementId'}  required>
                    {
                        movements.map(({value, label}) => (
                            <option key={'ddg5-' + value} value={value}>{label}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Auteur </Form.Label>
                <Form.Select type="text" name={'authorId'}  required>
                    {
                        authors.map(({value, label}) => (
                            <option key={'dd-' + value} value={value}>{label}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Année d’éditions </Form.Label>
                <Form.Select type="text" name={'publishedAtId'}  required>
                    {
                        editionDates.map(({value, label}) => (
                            <option key={'ddd-' + value} value={value}>{label}</option>
                        ))
                    }
                </Form.Select>
            </Form.Group>

            <Form.Group className="position-relative mb-3">
                <Form.Label>Fichier</Form.Label>
                <Form.Control
                    type="file"
                    name="file"
                    accept="application/pdf"

                    required
                />
            </Form.Group>

            <Button type={'submit'} className='mt-3'>
                Enregistrer
            </Button>

        </Form>
    )
}