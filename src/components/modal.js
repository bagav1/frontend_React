import React from "react";
import api from '../utils/service';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

export default function ModalCenter(props) {

  var personUpdate = {};

  const handleDelete = () => {
    api('delete', '/api/personal/' + props.data?.id).then(inf => {
      console.log(inf);
      window.location.reload(false);
    }, props.onHide);
  }
  const handleChange = (event) => {
    const id = event.target.id;
    const info = event.target.value;
    personUpdate[id] = info;
    console.log(personUpdate);
  }

  const handleUpdate = () => {
    if (!personUpdate) return;
    api('put', '/api/personal/' + props.data?.id, personUpdate).then(inf => {
      console.log('elemento a Actualizado ' + props.data?.id);
      console.log(inf);
      window.location.reload(false);
    }, props.onHide);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detalles del Registro
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Datos</h4>
        <i>ID: {props.data?.id}</i>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" defaultValue={props.data?.name || ''} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="age">
                <Form.Label>edad</Form.Label>
                <Form.Control type="text" defaultValue={props.data?.age || ''} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo</Form.Label>
                <Form.Control type="email" defaultValue={props.data?.email || ''} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="salary">
                <Form.Label>Salario</Form.Label>
                <Form.Control type="text" defaultValue={props.data?.salary || 0} onChange={handleChange} />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Apellido</Form.Label>
                <Form.Control type="text" defaultValue={props.data?.lastname || ''} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="married">
                <Form.Label>Casado?</Form.Label>
                <Form.Select aria-label="Default select example" defaultValue={props.data?.married || false} onChange={handleChange}>
                  <option>Seleccione una opcion</option>
                  <option value='true'>Si</option>
                  <option value='false'>No</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Telefono</Form.Label>
                <Form.Control type="text" defaultValue={props.data?.phone || ''} onChange={handleChange} />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="success" onClick={handleUpdate}>Editar</Button>
        <Button variant="danger" onClick={handleDelete}>Eliminar</Button>
        <Button onClick={props.onHide}>Cerrar</Button>
      </Modal.Footer>
    </Modal>
  );
}
