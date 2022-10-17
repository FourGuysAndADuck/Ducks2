import {Link} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useContext, useEffect, useState} from 'react';
import {ThemeContext} from '../Theme/Theme';
import {useCart} from 'react-use-cart';
import {BiMoon, BiSun} from 'react-icons/bi';

const NavbarComponent = () => {

    const { theme, setThemeMode } = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(theme);

    useEffect(()=>{
        setThemeMode(darkMode);
        console.log(darkMode)
    },[darkMode]);

    const {
        isEmpty,
        totalItems,
    } = useCart();

    return (
          <>
              <Navbar bg="dark" variant="dark" expand="lg">
                  {/* <Nav.Link */}
                  {/*     className={darkMode? 'text-dark-primary': 'text-light-primary'} */}
                  {/*     onClick={()=>setDarkMode(!darkMode)} */}
                  {/* > */}
                  {/*     {darkMode? <BiSun size="1.7rem" />: <BiMoon size="1.7rem" />} */}
                  {/* </Nav.Link> */}

                  <Container fluid>


                      <Navbar.Brand to="/">Duck'N'Stuff</Navbar.Brand>

                      <Navbar.Toggle aria-controls="navbarScroll" />
                      <Navbar.Collapse id="navbarScroll">
                          <Nav
                              className="me-auto my-2 my-lg-0"
                              style={{ maxHeight: '100px' }}
                              navbarScroll
                          >
                              <Nav.Link as={Link} to="/">Home</Nav.Link>
                              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                              <Nav.Link as={Link} to="/products">Products</Nav.Link>
                              <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
                              <Nav.Link as={Link} to="/newitems">Items</Nav.Link>
                              <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                              {/* <Nav.Link as={Link} to="/newitems">newitems</Nav.Link> */}
                              {/* <Nav.Link as={Link} to="/cart">cart</Nav.Link> */}

                              <NavDropdown title="Users" id="navbarScrollingDropdown">
                                  <NavDropdown.Item as={Link} to="/login">Login</NavDropdown.Item>
                                  <NavDropdown.Item as={Link} to="/signup">Sign Up</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item as={Link} to="/userPage">Profile</NavDropdown.Item>
                              </NavDropdown>
                              <Nav.Link style={{
                                  backgroundColor: "navajowhite",
                                  borderRadius: "50px"

                              }}
                                        className={darkMode? 'text-dark-primary': 'text-light-primary'}
                                        onClick={()=>setDarkMode(!darkMode)}
                              >
                                  {darkMode? <BiSun size="1.7rem" />: <BiMoon size="1.7rem" />}
                              </Nav.Link>
                          </Nav>
                      </Navbar.Collapse>
                  </Container>
              </Navbar>
        </>
    );
}

export default NavbarComponent;
