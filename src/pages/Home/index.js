import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer'
import { Link } from "react-router-dom";

import "./home.css";

function Home () {
  return (
    <div>
      <Header />,

      <div className="acess">
        <Link to="/Login">
          <h2 className="text-acess">Acesse</h2>
        </Link>
      </div>,
      
      <Footer />
      
    </div>
  );
}

export default Home;