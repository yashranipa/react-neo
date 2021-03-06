/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="d-md-flex d-block flex-row mx-md-auto mx-0">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "2rem" }} href="/">
                APOD
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" style={{ fontSize: "2rem" }} href="/neo">
                NEO
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
