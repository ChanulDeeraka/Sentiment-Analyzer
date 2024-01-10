import { useState } from "react";
import {
  Row,
  Col,
  Offcanvas,
  NavDropdown,
  Navbar,
  Nav,
  Form,
  Button,
  Container,
  Image,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGauge,
  faBolt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
import "../../assets/appcss/navcss.css";
import MenuBar from "../../assets/images/menu-bar.png";

export default function AppNavbar() {
  const targetExpand = "false"; // Set the breakpoint you want to use
  const [show, setShow] = useState(true);

  const addAlert = () => {
    setShow(show ? false : true);
  };

  return (
    <>
      <Navbar
        expand={targetExpand}
        className="system-panel-color mb-3"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand className="text-dark ms-4">
            Sentimemt Analyzer{" "}
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${targetExpand}`}
              onClick={addAlert}
              className="ms-5"
            />
          </Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${targetExpand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${targetExpand}`}
            placement="start"
            backdrop={false}
            scroll={true}
            style={{
              border: "none",
              marginTop: "55px",
              maxWidth: "280px",
              backgroundColor: "#f3f5f7",
            }}
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
                <Link
                  to="/"
                  className="small-box-link align-items-center justify-content-start"
                >
                  {" "}
                  <span>
                    <FontAwesomeIcon icon={faHome} className="mx-3" />
                  </span>{" "}
                  <span>Home</span>
                </Link>
                <Link
                  to="/dashboard"
                  className="small-box-link align-items-center justify-content-start"
                >
                  <FontAwesomeIcon icon={faGauge} className="mx-3" />
                  Dashboard
                </Link>
                <Link
                  to="/analyzer"
                  className="small-box-link align-items-center justify-content-start"
                >
                  <FontAwesomeIcon icon={faBolt} className="mx-3" />
                  Analyzer
                </Link>
                <Link
                  to="/user-profile"
                  className="small-box-link align-items-center justify-content-start"
                >
                  <FontAwesomeIcon icon={faUser} className="mx-3" />
                  Profile
                </Link>
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
