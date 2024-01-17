import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


const HeaderComponent = () => {
    return (
        
        
            <Navbar expand="lg" className="bg-body-tertiary">
              <Container>
                <link to = "/" className="navbar-brand">Pedidos Restaurante</link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Link to= "/" className= 'nav-link'>Home</Link>  
                    <Link to= "/clientes" className= 'nav-link'>Clientes</Link>
                    <Link to= "/productos" className= 'nav-link'>Productos</Link>
                    <Link to= "/categorias" className= 'nav-link'>Categorias</Link>
                    <Link to= "/pedidos" className= 'nav-link'>Pedidos</Link>  
                    <Link to= "/usuarios" className= 'nav-link'>Usuarios</Link>                
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          );
        }
     
export default HeaderComponent;