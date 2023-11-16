import React from 'react';
import portfolio from '../data/portfolio';
import PortfolioItem from './PortfolioItem';
// import Title from './Title';

function Portfolio() {
  return (

    <div className="flex flex-col justify-center items-center">
      {/* <Title>Projects</Title> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {portfolio.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}


export default Portfolio;
