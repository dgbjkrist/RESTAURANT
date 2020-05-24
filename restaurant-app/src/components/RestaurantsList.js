import React, { Component } from "react";
import { Table } from "react-bootstrap";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NavBar } from './NavBar';

export default class RestaurantsList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    };
  }



  componentDidMount() {
    this.getData()
  }

  getData = ()=>fetch("http://localhost:3000/restaurant").then((response) => {
    response.json().then((result) => {
      this.setState({ list: result });
    });
  });

  delete = (id)=> {
      fetch("http://localhost:3000/restaurant/"+id, 
      {
          method:"DELETE"
      })
      .then((res)=>{
          res.json().then((result)=>{
              alert(result)
              this.getData()
          })
      })
      .catch(e=>alert(e))
  }
  
  render() {
    return (
      <div>
      <NavBar />
        <h1>LISTE DES RESTAURANTS</h1>
        {this.state.list ? (
          <div>
            <Table striped bordered hover style={{width:'80%', marginLeft: 'auto',
      marginRight: 'auto'}}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Rating</th>
                  <th>Email</th>
                  <th>Operations</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item, i) => (
                  // <div key={item.id}>{item.name}</div>
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.rating}</td>
                    <td>{item.email}</td>
                    <td><Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit} color="orange" style={{marginRight:'20px'}}/></Link>
                    <button onClick={()=>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></button></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ) : (
          <p>Veuillez patientez... </p>
        )}
      </div>
    );
  }
}
