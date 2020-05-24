import React, { Component } from "react";
import {Form, Row, Col, Button} from "react-bootstrap";
import { NavBar } from './NavBar';

export default class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name:null,
            address:null,
            rating:null,
            email:null,
        };
    }

    componentDidMount()
    {
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((res)=>{
            res.json().then((result)=>{
                this.setState({
                    id:result.id,
                    name:result.name,
            address:result.address,
            rating:result.rating,
            email:result.email,

                })
                // console.log(result)
            })
        })
    }

    update = ()=>{
        fetch('http://localhost:3000/restaurant/'+this.state.id, {
            method:"PUT",
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify(this.state)
        })
        .then(res=>res.json())
        .then(
            result=>{
                alert(result)
        })
        .catch(e => alert(e));
    }


  render() {

    // console.log(this.props);
      
    return (
      <div>
        
        <NavBar />
        <Form onSubmit={this.update} style={{width:'60%', marginLeft: 'auto',
      marginRight: 'auto'}}>
        <h1>METTRE A JOUR LES INFO DU RESTAU <em style={{color:"orange"}}>{this.state.name}</em></h1>
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
              value={this.state.name}
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
              value={this.state.address}
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
              value={this.state.rating}
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
              value={this.state.email}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Soumettre form</Button>
          </Col>
        </Form.Group>
      </Form>
      </div>
      
    );
  }
}
