import React, { Component } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { NavBar } from "./NavBar";

export default class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      address: null,
      rating: null,
      email: null,
    };
  }

  add = () => {
    // e.preventDefault()
    console.log(this.state);
    fetch("http://localhost:3000/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((result) => {
        result.json();
      })
      .then(() => {
        alert("restaurant ajouté");
      });
  };
  render() {
    return (
      <div>
        <NavBar />
        <Form
          onSubmit={this.add}
          style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}
        >
          <h1>ADD AN OTHER RESTAURANT</h1>
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

          <Form.Group as={Row} controlId="formHorizontalAddress">
            <Form.Label column sm={2}>
              Address
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type=""
                onChange={(event) => {
                  this.setState({ address: event.target.value });
                }}
                placeholder="Restaurant Address"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalRating">
            <Form.Label column sm={2}>
              Rating
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="number"
                onChange={(event) => {
                  this.setState({ rating: event.target.value });
                }}
                placeholder="Restaurant Rating"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Email
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="email"
                onChange={(event) => {
                  this.setState({ email: event.target.value });
                }}
                placeholder="Restaurant Email"
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row}>
            <Col sm={{ span: 10 }}>
              <Button type="submit">Soumettre form</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    );
  }
}
