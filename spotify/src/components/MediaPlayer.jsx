import React, { Component } from "react";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import {
  faPlayCircle,
  faBackward,
  faForward,
  faRandom,
  faInfinity,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default () => {
  return (
    <Container fluid className=" mediaPlayer ">
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <div>
            <FontAwesomeIcon icon={faInfinity} size="lg" className="mr-3" />
            <FontAwesomeIcon icon={faBackward} size="lg" className="mr-3" />
            <FontAwesomeIcon
              icon={faPlayCircle}
              size="lg"
              className="playcirclee mr-3"
            />
            <FontAwesomeIcon icon={faForward} size="lg" className="mr-3" />
            <FontAwesomeIcon icon={faRandom} size="lg" className="mr-3" />
          </div>
          <ProgressBar className="mt-2" variant="success" now={40} />
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};
