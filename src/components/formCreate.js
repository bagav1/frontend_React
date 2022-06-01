import React from "react";
import api from '../utils/service';
import { Button, Form, Row, Col, Alert } from 'react-bootstrap';

export default function TableCreated(props) {

  const [show, setShow] = React.useState(false);

  var personNew = {};

  const handleChange = (event) => {
    const id = event.target.id;
    const info = event.target.value;
    personNew[id] = info;
  }

  const handleCreate = () => {
    try {
      if (!personNew) return;
      const newData = {
        name: personNew.name,
        lastname: personNew.lastname,
        age: Number(personNew.age),
        email: personNew.email,
        phone: personNew.phone,
        married: personNew.married.toLowerCase() === 'true',
        salary: Number(personNew.salary)
      }
      console.log(newData);
      api('post', '/api/personal', newData).then(inf => {
        if (inf.data.error) {
          console.log('Error al intentar crear el elemento');
          setShow(true)
          setTimeout(() => setShow(false), 3000);
          //window.location.reload(false);
          return;
        }
        console.log('elemento a Creado ' + inf.data.id);
        console.log(inf);
        window.location.reload(false);
      });
    } catch (e) {
      console.log(e);
      setShow(true)
      setTimeout(() => setShow(false), 3000);
    }
  }

  return (
    <div>
      <h4>Datos</h4>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombres" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>edad</Form.Label>
              <Form.Control type="text" placeholder="Edad" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo</Form.Label>
              <Form.Control type="email" placeholder="Correo" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="salary">
              <Form.Label>Salario</Form.Label>
              <Form.Control type="text" placeholder="Salario" onChange={handleChange} />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="married">
              <Form.Label>Casado?</Form.Label>
              <Form.Select aria-label="Default select example" defaultValue='default' onChange={handleChange}>
                <option value='default'>Seleccione una opcion</option>
                <option value='true'>Si</option>
                <option value='false'>No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control type="text" placeholder="Telefono" onChange={handleChange} />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Button variant="primary" onClick={handleCreate}>Crear</Button>
      <br />
      <Alert show={show} key='error' variant='danger'>
        <Alert.Heading>Error</Alert.Heading>
        <p>
          No se pudo crear el elemento. Revisa los datos ingresados.
        </p>
      </Alert>
    </div>
  );
}