import React, { PureComponent } from "react";
import "./header.css";

import logo from "../../assets/images/logo.png";

class Header extends PureComponent {
  render() {
    return (
      <div className="hgroup">
        <div className= "logo-19">
          <img src= {logo} alt="Senhora Vacina" />
        </div>
        <h1 className="text-span-19">CALENDÁRIO VACINAL</h1>
      </div>
    );
  }
}

export default Header;