import {
  Card,
  Button,
  Row,
  Col,
  Image,
  ListGroup,
  Badge,
} from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import UserProfileImage from "../assets/images/user-profile.png";
import "../assets/appcss/userprofilecss.css";

export default function ProfileInfoCard() {
  return (
    <Card>
      <Card.Body className="p-5">
        <Row>
          <Col className="col-sm-4 d-flex">
            <h6>Name</h6>
          </Col>
          <Col className="col-sm-8">
            <span>Chanul Gunathilake</span>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="col-sm-4 d-flex">
            <h6>Address</h6>
          </Col>
          <Col className="col-sm-8">
            <span>34/28 Dharmarathne Avenue, Rawathawatte, Moratuwa</span>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="col-sm-4 d-flex">
            <h6>Ocupation</h6>
          </Col>
          <Col className="col-sm-8">
            <span>Engineer</span>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="col-sm-4 d-flex">
            <h6>Email</h6>
          </Col>
          <Col className="col-sm-8">
            <span>chanuldeeraka@gmail.com</span>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="col-sm-4 d-flex">
            <h6>Phone No</h6>
          </Col>
          <Col className="col-sm-8">
            <span>+94 776 9999 35</span>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="col-sm-4 d-flex">
            <h6>Age</h6>
          </Col>
          <Col className="col-sm-8">
            <span>24 Years</span>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col className="col-sm-4 d-flex">
            <h6>Gender</h6>
          </Col>
          <Col className="col-sm-8">
            <span>Male</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
