import React from "react";
import {
  InputGroup,
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
} from "react-bootstrap";
import CardGroup from "react-bootstrap/CardGroup";
import SentimentScoreCard from "../components/SentimentScoreCard";
import SearchBar from "../components/SearchBar";

export default function SentimentScore() {
  return (
    <>
      <SearchBar />
      <Row>
        <Col className="col-sm-6">
          <SentimentScoreCard
            SentimentTxt="With supporting text below as a natural lead-in to additional content."
            SentimentScore="7.6"
            SentimentEmoji="h"
          />
        </Col>
        <Col className="col-sm-6">
          <SentimentScoreCard
            SentimentTxt="With supporting text below as a natural lead-in to additional content."
            SentimentScore="7.6"
            SentimentEmoji="h"
          />
        </Col>
      </Row>
      <Row>
        <Col className="col-sm-6">
          <SentimentScoreCard
            SentimentTxt="With supporting text below as a natural lead-in to additional content."
            SentimentScore="7.6"
            SentimentEmoji="n"
          />
        </Col>
        <Col className="col-sm-6">
          <SentimentScoreCard
            SentimentTxt="With supporting text below as a natural lead-in to additional content."
            SentimentScore="7.6"
            SentimentEmoji="a"
          />
        </Col>
      </Row>
    </>
  );
}
