import React from 'react';
import api from '../utils/service';
import ModalCenter from './modal';
import { Button, Table } from 'react-bootstrap';



export default function List() {
  const [post, setPost] = React.useState(null);
  const [person, setPerson] = React.useState(null);
  const [modalShow, setModalShow] = React.useState(false);

  React.useEffect(() => {
    api('get', '/api/personal').then(data => setPost(data));
  }, []);

  if (!post) return null;

  const data = post.data;
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th data-field="name">Nombre</th>
            <th data-field="lastname">Apellido</th>
            <th data-field="email">Correo</th>
            <th data-field="salary">Salario</th>
            <th data-field="action">Accion</th>
          </tr>
        </thead>
        <tbody>
          {data.map(person =>
            <tr key={person.id}>
              <td key={person.name}>{person.name}</td>
              <td key={person.lastname}>{person.lastname}</td>
              <td key={person.email}>{person.email}</td>
              <td key={person.salary}>{person.salary}</td>
              <td key={person.id}><Button variant="primary" onClick={() => {setModalShow(true); setPerson(person)}}>Submit</Button></td>
            </tr>
          )}
        </tbody>
      </Table >
      <ModalCenter
        show={modalShow}
        data={person}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}