import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar fixed z-50 w-full transition-all duration-300 ${scrolling ? 'py-4' : 'py-8'}`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto container">
        <Link className="text-2xl uppercase font-bold text-white p-3" to="/">
          Start Framework
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 mr-4"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'
          } overflow-hidden transition-all duration-500 ease-in-out w-full lg:flex lg:items-center lg:w-auto`}
          id="navbar-default"
        >
          <ul className="flex flex-col lg:flex-row lg:gap-4 lg:p-4 items-start lg:items-center gap-4 md:mt-0 p-3 text-white">
            <li>
              <NavLink className="text-lg uppercase font-bold" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg uppercase font-bold" to="/portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg uppercase font-bold" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
