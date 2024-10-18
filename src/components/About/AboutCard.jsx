import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Udit Verma </span>
            from <span className="purple">Indore, India</span>
            <br />
            I am currently a fresher looking for a job.
            <br />
            I graduated with a B.Tech degree in CSE from Acropolis Institute of Technology and Research.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Like to play outdoor sports like Cricket.
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening music of different genres.
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching anime.
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Simplicity, carried to the extreme, becomes elegance!"{" "}
          </p>
          <footer className="blockquote-footer">John Franklin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
