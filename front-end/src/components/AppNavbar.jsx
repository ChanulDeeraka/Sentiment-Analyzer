import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGauge,
  faBolt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
      <Navbar expand={targetExpand} className={`bg-dark mb-3`} sticky="top">
        <Container fluid>
          <Navbar.Brand href="#" className="ms-5 text-white">
            Sentimemt Analyzer
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${targetExpand}`}
            onClick={addAlert}
            style={{ backgroundColor: "#758aff" }}
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${targetExpand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${targetExpand}`}
            placement="start"
            backdrop={false}
            scroll={true}
            onClick={addAlert}
            className="bg-dark text-white"
            style={{ border: "none", marginTop: "55px", maxWidth: "280px" }}
          >
            {/* <Offcanvas.Header>
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${targetExpand}`}
              >
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header> */}
            <Offcanvas.Body>
              {/* <Nav className="justify-content-end flex-grow-1">
                <Form className="justify-content-center d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 ms-5"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Nav> */}
              <Nav className="justify-content-center flex-grow-1 pe-5">
                <Nav.Link href="#action1" className="small-box-link">
                  <FontAwesomeIcon icon={faHome} className="me-2 ms-5" />
                  <span>Home</span>
                </Nav.Link>
                <Nav.Link href="/dashboard" className="small-box-link">
                  <FontAwesomeIcon icon={faGauge} className="me-2 ms-5 " />
                  Dashboard
                </Nav.Link>
                <Nav.Link href="#action1" className="small-box-link">
                  <FontAwesomeIcon icon={faBolt} className="me-2 ms-5" />
                  Analyzer
                </Nav.Link>
                <Nav.Link href="#action2" className="small-box-link">
                  <FontAwesomeIcon icon={faUser} className="me-2 ms-5" />
                  Profile
                </Nav.Link>
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
