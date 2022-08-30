import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Contact/Contact.scss"

function Formulario() {
    return (
        <Form className='baseFormulario'>
            <h2 className="titularForm"> Conectate con nosotros</h2>
            <Form.Group className="mb-3 linealForm" controlId="formBasicEmail">
                <Form.Label>Tu Email</Form.Label>
                <Form.Control className="linealHolder" type="email" placeholder="escribe tu email" />
            </Form.Group>

            <Form.Group>
                <Form.Text className="text-muted">
                    Nosotros Nunca le pasaremos tus datos a nadie.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3 linealForm" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className="linealHolder" type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3 linealForm" controlId="formBasicCheckbox">
                <Form.Check className="linealcheck" type="checkbox" label="Check" />
            </Form.Group>

            <Button variant="primary" type="submit">
                ENVIAR
            </Button>
        </Form>
    );
}

export default Formulario;
