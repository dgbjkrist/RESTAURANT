import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { NavBar } from "./NavBar";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      password: null,
    };
  }

  login = (e) => {
    e.preventDefault();
    console.log(this.state);
    fetch("http://localhost:3000/login?q=" + this.state.name).then((data) => {
      console.log(data);

      data.json().then((resp) => {
        //   console.warm("resp", resp);
        if (resp.length > 0) {
          console.log(this.props.history.push("/list"));
          localStorage.setItem("login", JSON.stringify(resp));
        } else {
          alert("Please check username and password");
        }
      });
    });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Form
          style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}
          onSubmit={this.login}
        >
          <h1>PAGE DE CONNEXION</h1>
          <Form.Group as={Row} controlId="formHorizontalName">
            <Form.Label column sm={2}>
              Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type=""
                onChange={(event) => {
                  this.setState({ name: event.target.value });
                }}
                placeholder="Restaurant Name"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalPassword">
            <Form.Label column sm={2}>
              Password
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="password"
                onChange={(event) => {
                  this.setState({ password: event.target.value });
                }}
                placeholder="enter votre password"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10 }}>
              <Button type="submit">Login </Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
