import React, { PureComponent } from "react";
import "./footer.css";

class Footer extends PureComponent {
  render() {
    return (

        <div className="footer-wrapper">
        
          <span className="footer-text">Plataforma desenvolvida por Elisa e Sophia Pinto.<br/>Copyright&copy;&nbsp;2022.<br/>Todos os direitos reservados.</span>
          {/*<div className="footer-navbar">
            <a href="/" className="footer-link">
              Termos de uso
            </a>
            <a href="/" className="footer-link">
              Política de privacidade
            </a>
          </div>
          */}
          
        </div>
    );
  }
}

export default Footer;