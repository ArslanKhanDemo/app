import React from "react";
import { Link } from "react-router-dom";

import { FaHome } from "react-icons/fa";

function About() {
  return (
    <div className="aboutPage">
      <p>
        <Link to="/">
          <FaHome size={30} />
        </Link>
      </p>
      <h1>About</h1>
      <p>
        This page is all about to give you a complete information about our
        Company.
      </p>
    </div>
  );
}

export default About;
