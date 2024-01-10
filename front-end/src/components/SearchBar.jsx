import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Search from "../assets/images/search.png";
import "../assets/appcss/searchbarcss.css";

export default function SearchBar() {
  return (
    <Card className="shadow" id="searchbar">
      <Card.Body>
        <Row>
          <Form.Control
            size="md"
            type="text"
            placeholder="Search..."
            id="searchinput"
          />
        </Row>
      </Card.Body>
    </Card>
  );
}
