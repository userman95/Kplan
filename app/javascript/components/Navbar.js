import React from "react";
import { Link } from "react-router-dom";
import { NavBarWrapper, ListWrapper } from "./styled";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavBarWrapper>
        <Link className="navbar-brand kplan-logo" to={"/home"}>
          KPLAN
        </Link>
        <ListWrapper>
          <li className="nav-item">
            <Link className="nav-link" to={"/home"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={"/content"}>
              Content
            </Link>
          </li>
        </ListWrapper>
      </NavBarWrapper>
    );
  }
}
