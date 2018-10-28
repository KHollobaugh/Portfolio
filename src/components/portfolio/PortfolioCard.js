import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './portfolio.css'

const PortfolioCard = (props) => {
  return (
    <div>
        <div className='portfolio-piece'>
      <Card>
        <CardImg top width="100%" src={props.project.snapshot} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.project.title}</CardTitle>
          <CardSubtitle>{props.project.technologies}</CardSubtitle>
          <CardText>{props.project.description}</CardText>
          <div className='card-buttons'>

          <Button className="button">
          <a href={props.project.rendering}
          className='button'
          target="_blank"
          rel="noopener noreferrer">
          View Rendering</a></Button>

          <Button className="button">
          <a href={props.project.code}
          className='button'
          target="_blank"
          rel="noopener noreferrer">
          View Code</a></Button>

          </div>
        </CardBody>
      </Card>
      </div>
    </div>
  );
};

export default PortfolioCard;