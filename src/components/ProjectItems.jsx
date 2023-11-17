import React, { useState } from 'react';

const ProjectItem = ({ title, imgUrl, stack, code, demo }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="border-2 border-stone-900 rounded-md relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={imgUrl}
        alt="project"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      {hovered && (
        <div className="absolute inset-0 bg-black opacity-70 flex items-center justify-center">
          <div className="flex flex-row items-center space-x-4">
            <a
              href={code} // Link to the code
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-4 border-2 border-stone-900 rounded-md font-semibold hover:bg-white"
            >
              Code
            </a>
            <a
              href={demo} // Link to the demo
              target="_blank" // Open in a new tab
              rel="noopener noreferrer"
              className="bg-white text-black py-2 px-4 border-2 border-stone-900 rounded-md font-semibold hover:bg-white"
            >
              Demo
            </a>
          </div>
        </div>
      )}
      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item) => (
            <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">
              {item}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
