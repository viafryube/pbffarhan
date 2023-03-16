import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Dedicated to creating impactful solutions!</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} M.Farhan Fadillah</h3>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer