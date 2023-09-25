import React from "react";
import Card from "react-bootstrap/Card";

function ProjectCards(props) {
  return (
    <a href={props.link} style={{textDecoration: "none"}} target="_blank" rel="noopener noreferrer">
      <Card className="project-card-view mx-auto">
        <Card.Img variant="top" style={{padding: "8px"}} src={props.imgPath} alt="card-img" />
        <Card.Title className="project-heading">
          <u>{props.title}</u>          
        </Card.Title>
        <Card.Body className="project-description">
            {props.description}
        </Card.Body>
      </Card>
    </a>
  );
}
export default ProjectCards;
