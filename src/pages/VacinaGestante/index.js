import React from "react";
//import { Link } from "react-router-dom";

import vacinalogo from "../../assets/images/logo.png";
import "./vacinagestante.css";

import gestante from "../../assets/images/gestante.svg";


function VacinaGestante () {
  return (
    <div>
        <div className= "logo-gest-calenderio">
          <img src= {gestante} alt="Vacina Gestante" />
        </div>
        <span className="text-gest-calenderio">CALENDÁRIO VACINAL DA GESTANTE</span>
        
        <div className= "wrapper-vacina-item-gestante">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-gestante">Difteria e Tétano</span>
            <span className="text-quant-doses-gestante">Nº de doses:</span>
            <span className="text-infomacao-gestante">Informações:</span>
            
            <div className="wrapper-quant-doses-gestante">
                <span className="text-quant-doses-02-gestante">3</span>
            </div>

            
            <div className="wrapper-informacoes-gestante">
            <span className="text-informacao-2-gestante">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-02-gestante">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-gestante">Hepatite B recombinante</span>
            <span className="text-quant-doses-gestante">Nº de doses:</span>
            <span className="text-infomacao-gestante">Informações:</span>
            
            <div className="wrapper-quant-doses-gestante">
                <span className="text-quant-doses-02-gestante">3</span>
            </div>

            
            <div className="wrapper-informacoes-gestante">
                <span className="text-informacao-2-gestante">Iniciar ou completar o esquema, de acordo com a situação vacinal.</span>
            </div>
        </div>

        <div className= "wrapper-vacina-item-03-gestante">
            <div className="logo-vacina">
                <img src= {vacinalogo} alt="logo" />
            </div>
            <span className="text-nome-vacina-gestante">Difteria, Tétano, Pertussis acelular</span>
            <span className="text-quant-doses-gestante">Nº de doses:</span>
            <span className="text-infomacao-gestante">Informações:</span>
            
            <div className="wrapper-quant-doses-gestante">
                <span className="text-quant-doses-02-gestante">1</span>
            </div>

            
            <div className="wrapper-informacoes-gestante">
                <span className="text-informacao-2-gestante">1 dose para gestante a partir da 20º semana de gravidez, 1 dose a cada gestação.</span>
            </div>
        </div>            
    </div>
  );
}

export default VacinaGestante;
