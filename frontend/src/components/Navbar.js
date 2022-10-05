import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home"
import Contact from "./Contact";
import Login from "./Login";
import SignUp from "./SignUp";
import Help from "./Help";
import Checkout from "./Checkout";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {fab} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const NavbarComponent = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand to="/home">DucksNStuff'</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                            <Nav.Link as={Link} to="/checkout">Checkout<FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></Nav.Link>
                            <NavDropdown title="Users" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/signUp">Sign Up</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Duck News</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/help">Help</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/help" element={<Help/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
            </Routes>
        </>
    );
}

export default NavbarComponent;
