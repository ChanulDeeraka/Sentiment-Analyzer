import {
  Card,
  Button,
  Row,
  Col,
  Image,
  ListGroup,
  Badge,
} from "react-bootstrap";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import CardGroup from "react-bootstrap/CardGroup";
import UserProfileImage from "../assets/images/user-profile.png";
import "../assets/appcss/userprofilecss.css";

export default function ProfileImgCard() {
  return (
    <Card>
      <Card.Img variant="top" className="p-5" src={UserProfileImage} />
      <Card.Body>
        <Card.Title className="text-center">Chanul Gunathilake</Card.Title>
        <Card.Text className="text-center">
          <div className="my-4">
            <Badge pill bg="info" className="p-2 mx-2">
              Male
            </Badge>
            <Badge pill bg="dark" className="p-2">
              24 Years
            </Badge>
            <Badge pill bg="success" className="p-2 mx-2">
              Engineer
            </Badge>
          </div>
          <div className="my-5">
            <Link to="/dashboard">
              {" "}
              <FontAwesomeIcon
                className="p-2 btn btn-primary mx-2"
                icon={faPenToSquare}
              />
            </Link>
            <Link to="/">
              <FontAwesomeIcon className="p-2 btn btn-danger" icon={faTrash} />
            </Link>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
