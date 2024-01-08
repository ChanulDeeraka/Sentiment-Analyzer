import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Search from "../assets/images/search.png";
import "../assets/appcss/searchbarcss.css";

export default function SearchBar() {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col className="col-sm-10 d-flex align-items-center">
            <Form.Control
              size="md"
              type="text"
              placeholder="Large text"
              style={{
                background: "transparent",
                border: "none",
                borderBottom: "none", // You can adjust the color
                borderRadius: "0",
                boxShadow: "none",
                outline: "none",
              }}
            />
          </Col>
          <Col className="col-sm-2 d-flex align-items-center justify-content-center">
            <Image
              src={Search}
              type="button"
              alt="Image Alt Text"
              fluid
              className="searchbaricon"
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
