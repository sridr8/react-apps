import React from "react";
import "./App.css";
import {
  Button,
  Container,
  Row,
  Col,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container>
        <Row className="row">
          <Col className="column">1 of 2</Col>
          <Col> className='column'2 of 2</Col>
        </Row>
        <Row className="row">
          <Col className="column">1 of 3</Col>
          <Col className="column">2 of 3</Col>
          <Col className="column">3 of 3</Col>
        </Row>
      </Container>
      <Breadcrumb>
        <BreadcrumbItem>Item1</BreadcrumbItem>
        <BreadcrumbItem>Item2</BreadcrumbItem>
        <BreadcrumbItem>Item3</BreadcrumbItem>
      </Breadcrumb>
      <Alert>This is a button</Alert>
      <Button>Test Button</Button>
    </div>
  );
}

export default App;
