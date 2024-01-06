import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./navcss.css";

export default function AppNavbar() {
  const targetExpand = "false"; // Set the breakpoint you want to use
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  const addAlert = () => {
    setShow(show ? false : true);
  };

  return (
    <>
      <Navbar
        expand={targetExpand}
        className={`bg-body-tertiary mb-3 ${show ? "navbar-shrink" : ""}`}
      >
        <Container fluid>
          <Navbar.Brand href="#">Sentex</Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${targetExpand}`}
            onClick={addAlert}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${targetExpand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${targetExpand}`}
            placement="start"
            backdrop={false}
            show={true}
            onClick={addAlert}
          >
            <Offcanvas.Header>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${targetExpand}`}
              >
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* <Nav className="justify-content-end flex-grow-1">
                <Form className="justify-content-center d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav> */}
              <Nav className="justify-content-center flex-grow-1 pe-5">
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action1">Dashboard</Nav.Link>
                <Nav.Link href="#action1">Analyzer</Nav.Link>
                <Nav.Link href="#action2">Profile</Nav.Link>
                {/* <NavDropdown
                  title="Dropdown"
                  id={`offcanvasNavbarDropdown-expand-${targetExpand}`}
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
