import React from 'react';

//import logo from "../../assets/images/logo.png";

import Header from '../../components/Header/index.js';

import { Link } from "react-router-dom";

import "./home.css";
import Footer from '../../components/Footer/index.js';

function Home () {
  return (
    <div>
{/*
      <div className= "logo">
          <img src= {logo} alt="Senhora Vacina" />
      </div>
      
      <span className="text-span-40">CALENDÁRIO VACINAL</span>


*/}

      <Header  />
      
      <Link to="/Selecao">
        <button className="acess">Acesse</button>
      </Link>

      <Footer  />

{/*   <div className="footer-wrapper">
        
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

export default Home;