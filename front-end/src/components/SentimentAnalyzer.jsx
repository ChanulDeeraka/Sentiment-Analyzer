import { useState } from "react";
import { Form, FormControl, InputGroup } from "react-bootstrap";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import Analyze from "../assets/images/analyze.png";
import "../assets/appcss/analyzercss.css";
import SentimentScoreCard from "./SentimentScoreCard";

export default function SentimentAnalyzer() {
  const [sentiState, setsentiState] = useState(false);

  const analyzeText = () => {
    setsentiState(true);
  };

  const stopanalyzeText = () => {
    setsentiState(false);
  };

  return (
    <>
      {" "}
      <Card id="analyzer">
        <Card.Body>
          <Row>
            <Col className="col-sm-10 d-flex align-items-center">
              <Form.Control
                size="md"
                type="text"
                placeholder="Enter Your Thought..."
                id="analyzerinput"
              />
            </Col>
            <Col className="col-sm-2 d-flex align-items-center justify-content-center">
              {sentiState ? (
                <div class="lds-ellipsis" onClick={stopanalyzeText}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                <Image
                  src={Analyze}
                  type="button"
                  alt="Image Alt Text"
                  fluid
                  className="searchbaricon"
                  onClick={analyzeText}
                />
              )}
            </Col>
          </Row>
        </Card.Body>
      </Card>
      {sentiState ? (
        <div
          className="d-flex align-items-center justify-content-center mt-5"
          onClick={stopanalyzeText}
        >
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        <SentimentScoreCard
          SentimentTxt="With supporting text below as a natural lead-in to additional content."
          SentimentScore="7.6"
          SentimentEmoji="a"
        />
      )}
    </>
  );
}
