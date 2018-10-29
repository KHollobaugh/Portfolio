import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const PortfolioCard = (props) => {
  return (
    <div className="portfolio-piece">
      <Card>
        <CardImg top width="100%" src={props.project.snapshot} alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>{props.project.title}</h3></CardTitle>
          <CardSubtitle><h4>{props.project.technologies}</h4></CardSubtitle>
          <CardText><p>{props.project.description}</p></CardText>
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
  );
};

export default PortfolioCard;