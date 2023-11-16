import React from 'react';
import Navbar from './Navbar';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons from React Icons

function Intro() {
  return (
    <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
      <Navbar />
      <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Jacob Curtis</h1>
      <p className="text-base md:text-2xl mb-3 font-medium">Full-stack Software Engineer</p>
      <p className="text-sm max-w-xl mb-6 font-bold">I am a full-stack software engineer with a BSc in Computer Science from Durham University. </p>

      <div className="container max-w-screen-lg mx-auto">
        <div>
          <div className="flex flex-wrap justify-center gap-2">
            <a
              href="https://www.linkedin.com/in/jacobismailcurtis"
              className="bg-stone-900 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-md"
            >
              <FaLinkedin className="w-5 h-5 fill-current" />
              {/* <span>LinkedIn</span> */}
            </a>
            <a
              href="https://github.com/Jacob-Ismail-Curtis"
              className="bg-stone-900 p-3 font-semibold text-white inline-flex items-center space-x-2 rounded-md"
            >
              <FaGithub className="w-5 h-5 fill-current" />
              {/* <span>GitHub</span> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
