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
import ProfileInfoCard from "../components/ProfileInfoCard";
import ProfileImgCard from "../components/ProfileImgCard";
import "../assets/appcss/userprofilecss.css";

export default function UserProfile() {
  return (
    <Row>
      <Col className="col-sm-4 justufy-content-center my-4">
        <ProfileImgCard />
      </Col>
      <Col className="col-sm-8 justufy-content-center my-4">
        <ProfileInfoCard />
      </Col>
    </Row>
  );
}
