import React from 'react';
import api from './utils/service';
import 'materialize-css';
import { Button, Table, Modal } from 'react-materialize';
import './App.css';

export default function App() {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    api('get', '/api/personal').then(data => {
      setPost(data);
    });
  }, []);

  if (!post) return null;

  const data = post.data;

  return (
    <div className="App">
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
              <td key={person.id}><Button className='modal-trigger' href='#Modal-10' node='button'>Submit</Button></td>
            </tr>
          )}
        </tbody>
      </Table>
      <Button className="modal-trigger"
        href="#modal-10"
        node="button">Submit</Button>
      <Modal
        actions={[
          <Button flat modal="close" node="button" waves="green">Close</Button>
        ]}
        bottomSheet={false}
        fixedFooter
        header="Modal Header"
        id="Modal-10"
        open={true}
        options={{
          dismissible: true,
          endingTop: '10%',
          inDuration: 250,
          onCloseEnd: null,
          onCloseStart: null,
          onOpenEnd: null,
          onOpenStart: null,
          opacity: 0.5,
          outDuration: 250,
          preventScrolling: true,
          startingTop: '4%'
        }}
        root={document.body}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Modal>
    </div>
  );
}
