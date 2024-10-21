import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am an enthusiastic programmer with a strong desire to learn and grow in the tech field.
              <br />
              <br />I have a solid foundation in
              <i>
                <b className="purple"> Java & JavaScript </b>
              </i>
              and enjoy tackling new challenges.
              <br />
              <br />
              My primary interests lie in creating innovative &nbsp;
              <i>
                <b className="purple">Web Technologies and Applications </b>
              </i>
              and mastering the art of &nbsp;
              <i>
                <b className="purple">Data Structures and Algorithms (DSA).</b>
              </i>
              <br />
              <br />
              Having solved over 350+ problems on platforms like <b className="purple">LeetCode, GFG, Coding Ninjas, etc. </b>
              I continuously strive to enhance my analytical and problem-solving abilities.
              <br />
              <br />
              I also enjoy crafting powerful back-end solutions using <b className="purple">Node.js</b>
              and delivering seamless front-end experiences with
              <i>
                <b className="purple"> React.js.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Uditverma-333/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/udit_verma45510"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vermaudit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/uditverma_333/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
