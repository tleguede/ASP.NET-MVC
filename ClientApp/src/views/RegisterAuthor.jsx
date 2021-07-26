import {Button, Form} from "react-bootstrap";
import {AUTHOR_CREATION_URI} from "../redux/constants";

export default function RegisterAuthor() {

    return (
        <Form method='post' action={AUTHOR_CREATION_URI}>

            <h2 className='mb-7'>Enregistrement d'un auteur</h2>

            <Form.Group className="mb-3">
                <Form.Label>Nom de l'auteur</Form.Label>
                <Form.Control type="text" placeholder="..." name={'name'} required/>
            </Form.Group>

            <Button type={'submit'} className='mt-3'>
                Enregistrer
            </Button>

        </Form>
    )
}