import React from "react";
import { Card, Row, Col, Image } from "react-bootstrap";
import Angry from "../assets/images/angry.png";
import Smile from "../assets/images/smile.png";
import Neutral from "../assets/images/neutral.png";

export default function SentimentScoreCard(props) {
  return (
    <Card className="mt-4">
      <Card.Body className="p-5">
        <Row>
          <Col className="col-sm-8 d-flex align-items-center">
            <Card.Text>{props.SentimentTxt}</Card.Text>
          </Col>
          <Col className="col-sm-2 d-flex justify-content-center align-items-center">
            <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>{props.SentimentScore}</span>
          </Col>
          <Col className="col-sm-2 d-flex align-items-center justify-content-center">
            <Image
              src={
                props.SentimentEmoji === "a"
                  ? Angry
                  : props.SentimentEmoji === "h"
                  ? Smile
                  : props.SentimentEmoji === "n"
                  ? Neutral
                  : Neutral
              }
              alt="Image Alt Text"
              fluid
              style={{ maxWidth: "100%", height: "auto", maxHeight: "60px" }}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
