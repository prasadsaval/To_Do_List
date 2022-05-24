import React, { useState } from "react";
import { Link } from "react-router-dom";

const Todo = () => {
  //   let [admin, setAdmin] = useState(true);
  return (
    <section id="HeaderBlock">
      <article>
        <div className="logoblock">
          <a href="#">MYDOCTOR</a>
        </div>
        <div className="menublock">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Service">Service</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
};

export default Todo;
