import React from 'react';
import project from '../data/project';
import ProjectItem from './ProjectItems';
// import Title from './Title';

function Project() {
  return (

    <div className="flex flex-col justify-center items-center">
      {/* <Title>Projects</Title> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {project.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            imgUrl={project.imgUrl}
            stack={project.stack}
            code={project.code}
            demo={project.demo}
          />
        ))}
      </div>
    </div>
  );
}


export default Project;
