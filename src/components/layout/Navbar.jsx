import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

const Navbar = ({ title }) => {
  return (
    <nav>
      <div className="navbar mb-12 bg-neutral shadow-lg text-white">
        <div className="container mx-auto">
          <div className="flex-none px-2 mx-2">
            <FaGithub className="text-3xl pr-2 inline" />
            <Link to="/" className="text-lg font-bold align-middle">
              {title}
            </Link>
          </div>
        </div>

        {/* Home */}
        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
};

Navbar.propTypes = {
  title: PropTypes.string,
};
export default Navbar;
