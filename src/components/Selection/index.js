import React, { PureComponent, Fragment } from "react";
import "./selection.css";

import calendario from "../../assets/images/calendario.svg";

import { Link } from "react-router-dom";

//import logo from "../../assets/images/logo.png";

import gestante from "../../assets/images/gestante.svg";
import idoso from "../../assets/images/idoso.svg";
import adulto from "../../assets/images/adulto.svg";
import adolescente from "../../assets/images/adolescente.svg";
import criança from "../../assets/images/criança.svg";
import aprazamento from "../../assets/images/aprazamento.svg";

class Selection extends PureComponent {
    render() {
      return (
        <Fragment>

            {/*
        <div className= "logo-18">
          <img src= {logo} alt="Senhora Vacina" />
        </div>
        <span className="text-span-18">CALENDÁRIO VACINAL</span>
    */}

            <div className="calendario-wrapper">
               <figure className="figure-calendario">
                    <img src={calendario} alt="Calendario"/>
               </figure>
            </div>
            <div class="container">
                <div className="selection-wrapper">

                    <figure class= "select-img grid-item-01">
                        <Link to="/VacinaGestante">
                            <img src= {gestante} alt="Gestante" />
                            <span className="text-selection">GESTANTE</span>
                        </Link>
                    </figure>

                    <figure class= "select-img grid-item-02">
                        <Link to="/VacinaIdoso">
                            <img src= {idoso} alt="Idoso" />
                            <span className="text-selection">IDOSO</span>
                        </Link>
                    </figure>

                    <figure class= "select-img grid-item-03">
                        <Link to="/VacinaAdulto">
                            <img src= {adulto} alt="Adulto" />
                            <span className="text-selection">ADULTO</span>
                        </Link>
                    </figure>

                    <figure class= "select-img grid-item-04">
                        <Link to="/VacinaAdolescente">
                            <img src= {adolescente} alt="Adolescente" />
                            <span className="text-selection">ADOLESCENTE</span>
                        </Link>
                    </figure>

                    <figure class= "select-img grid-item-05">
                        <Link to="/VacinaCrianca">
                            <img src= {criança} alt="Criança" />
                            <span className="text-selection">CRIANÇA</span>
                        </Link>
                    </figure>
                    
                    <figure class= "select-img grid-item-06">
                        <Link to="/Aprazamento">
                            <img src= {aprazamento} alt="Aprazamento" />
                            <span className="text-selection">APRAZAMENTO</span>
                        </Link>
                    </figure>

                </div>

            </div>
        </Fragment>
  
  
      );
    }
  }


export default Selection;