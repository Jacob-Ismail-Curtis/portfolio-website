import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-transparent p-4">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Experience
            </a>
          </li>
          <li>
            <a href="#" className="text-black font-bold hover:underline underline-offset-8 decoration-4 mb-5">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
