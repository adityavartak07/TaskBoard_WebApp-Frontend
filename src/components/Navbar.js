import React from "react";
import { Nav, Navbar } from "reactstrap";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function NavBar() {
  return (
    <div>
      <Navbar className="navbuttons">
        <li className="list-unstyled">
          <Link to="./startwork">
            <Button className="navbut">Start Work</Button>
          </Link>{" "}
        </li>
        <li className="list-unstyled">
          <Link to="./short">
            <Button className="navbut">Short Break</Button>
          </Link>{" "}
        </li>
        <li className="list-unstyled">
          <Link to="./long">
            <Button className="navbut">Long Break</Button>
          </Link>{" "}
        </li>
      </Navbar>
    </div>
  );
}

export default NavBar;
