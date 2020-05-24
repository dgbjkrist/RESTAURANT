import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,
    faList,
    faPlus,
    faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand>App de Restau</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto" pullRight>
                    <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} /> Home</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} />List</Link></Nav.Link>
                    <Nav.Link href="#home"><Link to="/create"><FontAwesomeIcon icon={faPlus} />Create</Link></Nav.Link>
                    <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} />Search</Link></Nav.Link>
                    {
                        localStorage.getItem('login')?
                        <Nav.Link href="#link"><Link to="/logout">Sing Out</Link></Nav.Link>
                        : <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} />Connexion</Link></Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
