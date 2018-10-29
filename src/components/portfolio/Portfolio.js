import React from 'react';
import PortfolioCard from './PortfolioCard';

const Portfolio = props => {
    return (
        <div className='portfolio'>
        
        <h1>Projects</h1>

        <div className='card-container'>
        {props.projects.map((project, index) =>
        <PortfolioCard 
        key={index}
        project={project}
        />
        )}  
        </div>
        </div>
    )
}
export default Portfolio;
