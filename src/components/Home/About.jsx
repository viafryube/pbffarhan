import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Muhammad Farhan Fadillah </span>
                 and I'm from <span className="yellow"> Bekasi, Jawa Barat.</span>
                <br />
                <br />
                Saya memiliki keinginan tinggi untuk terus <b className="yellow"> belajar </b> dan mendalami pengetahuan tentang <b className="yellow"> Kopi. </b>
                <br />
                <br />
                  Saya akan terus berusaha menimbulkan 
                  <b className="yellow"> ide baru </b>untuk memunculkan rasa kopi.,  
                  
                  
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About