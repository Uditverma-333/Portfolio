import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import tomatoImg from "../../assets/projects/Tomato.png"; // Add image paths accordingly
import wanderlustImg from "../../assets/projects/Wanderlust.png";
import weatherwiseImg from "../../assets/projects/WeatherWise.png";
import StarryBackground from "../StarryBackground/StarryBackground";

function Projects() {
  return (
    <Container fluid className="project-section">
      <StarryBackground />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tomatoImg}
              isBlog={false}
              title="Tomato"
              description="A food delivery website built using the MERN stack, featuring seamless order processing, advanced filtering options, and secure authentication mechanisms for enhanced user experience."
              ghLink="https://github.com/Uditverma-333/food-del"
              demoLink="https://tomato-l35k.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlustImg}
              isBlog={false}
              title="Wanderlust"
              description="A hotel booking platform with real-time map integration and secure authentication. Developed using full-stack technologies with a responsive design, enhancing user experience across devices."
              ghLink="https://github.com/Uditverma-333/Wanderlust"
              demoLink="https://wanderlust-wuwa.onrender.com/listings"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weatherwiseImg}
              isBlog={false}
              title="WeatherWise"
              description="A React-based weather application that provides real-time weather updates and forecasts, with a clean, intuitive interface for easy navigation."
              ghLink="https://github.com/Uditverma-333/WeatherWise"
              demoLink="https://weather-wise-theta-five.vercel.app/" // Use your actual demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
