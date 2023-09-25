import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import memoji from "../Assets/hwanykim.jpg";
import workoutApp from "../Assets/workout_tracker_logo.png";
import pythonAutomation from "../Assets/pythonAutomation.png";
import portfolioWebsite from "../Assets/portfolioWebsite.png";
import linkedin from "../Assets/linkedin.png";
import golang from "../Assets/golang.png";
import ProjectCard from "./ProjectCards";

function Home() {
  const redirectToLinkedIn = () => {
    window.open("https://www.linkedin.com/in/kimhwany/");
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleImageHover = () => {
    setIsHovered(true);
  };

  const handleImageLeave = () => {
    setIsHovered(false);
  };

  return (
    <section className="section-section">
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={6} className="home-header">
              <h1 className="heading-firstname">
                <strong> HWANY </strong>
                <strong> KIM </strong>
              </h1>
              <img
                src={memoji}
                alt="memoji"
                className="memoji-mobile center"
              />
              <h4 className="heading-subtitle">
                <u>Software Engineer</u>
              </h4>
              <p className="heading-description">Third-year Computer Science student seeking a Winter 2024 internship to dive deep into development!</p>
              <Row>
                <Col md={1}/>
                <Col md={7}>
                  <div className="linkedin-container" onClick={redirectToLinkedIn}
                      onMouseEnter={handleImageHover}
                      onMouseLeave={handleImageLeave}
                  >
                    <img
                      src={linkedin}
                      alt="linkedin"
                      className="img-fluid linkedin"
                    />
                  </div>
                </Col>
                <Col md={4}/>
              </Row>
           </Col>
            <Col md={5} sm={0} xs={0} className="memoji-desktop">
              <img
                src={memoji}
                alt="memoji"
                className="img-fluid memoji-desktop center"
              />
            </Col>
            <Col md={1}/>
          </Row>
        </Container>
      </Container>
      <Container fluid className="content-section" id="content">
      <Container className="content-container center">
        <Row>
          <Col md={8} lg={6} className="project-card center">
            <ProjectCard
              imgPath={golang}
              title={"RESTful API"}
              description="Developed using Golang while following RESTful architecture."
              link={"https://github.com/kimhwany/RESTfulAPI"}
            />
          </Col>
          <Col md={8} lg={6} className="project-card center">
            <ProjectCard
              imgPath={pythonAutomation}
              title="Automation using Python"
              description="Created some scripts to automate things for fun using Python."
              link={"https://github.com/kimhwany/PythonAutomation"}
            />
          </Col>
          <Col md={8} lg={6} className="project-card center">
            <ProjectCard
              imgPath={workoutApp}
              title={"Workout Tracking App"}
              description="Developed using Java, JavaFX, OOP, and SOLID Principles."
              link={"https://github.com/kimhwany/Workout-Tracker-Project"}
            />
          </Col>
          <Col md={8} lg={6} className="project-card center">
            <ProjectCard
              imgPath={portfolioWebsite}
              title="Portfolio Website"
              description="Developed using React.js, Bootstrap.css, JavaScript, and HTML/ CSS."
              link={"https://github.com/kimhwany/PortfolioWebsite"}
            />
          </Col>
        </Row>
      </Container>
    </Container>
    </section>
  );
}

export default Home;
