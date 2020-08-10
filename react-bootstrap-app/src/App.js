import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  Button,
  Card,
  Alert,
  Breadcrumb,
  BreadcrumbItem,
  CardImg,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card>
          <CardImg></CardImg>
        </Card>
        <Breadcrumb>
          <BreadcrumbItem>Item1</BreadcrumbItem>
          <BreadcrumbItem>Item2</BreadcrumbItem>
          <BreadcrumbItem>Item3</BreadcrumbItem>
        </Breadcrumb>
        <Alert>This is a button</Alert>
        <Button>Test Button</Button>
      </header>
    </div>
  );
}

export default App;
