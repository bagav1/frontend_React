import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Nav from './components/nav';
import List from './components/List';
import TableCreated from './components/formCreate';
import { Row, Col, Container } from 'react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Container>
      <Row>
        <Col lg={6}>
          <h3 style={{ textAlign: 'center' }}>Lista</h3>
          <List />
        </Col>
        <Col lg={{ span: 5, offset: 1 }}>
          <h3 style={{ textAlign: 'center' }}>Crear nuevo registro</h3>
          <TableCreated />
        </Col>
      </Row>
    </Container>
  </React.StrictMode>,
);

reportWebVitals();
