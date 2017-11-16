import React from "react";
import { Col, Row, Container } from "../../components/Grid";

const NoMatch = () =>
  <Container fluid>
    <Row>
      <Col size="md-12">
            <img src="https://http.cat/404" alt="404 Not Found"/>
      </Col>
    </Row>
  </Container>;

export default NoMatch;
