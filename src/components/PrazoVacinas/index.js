import React, { PureComponent } from "react";

import dados from "../../vacinas.json";

import logo from "../../assets/images/logo.png";

import './prazovacinas.css';

function selectvacina() {
    
  var faixaetaria = this.handleChange();
  
  if( faixaetaria === "vacinasrn") {

      <select class="pesquisa-faixa-etaria" type="checkbox" value={this.state.value} onChange={this.handleChange}>
      <option value="" disabled selected>Selecione a faixa etária:</option>
      {
        dados.titulo.vacinasrn.map((v,i)=> <option value={i}> {v.vacinasrn} </option>
      )}
</select>
}
}
class PrazoVacinas extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});          
  }

  handleDate(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    // const result = this.state.value.slice();
    //result[1] = "VacinaData";
    //alert('A data da próxima vacina é: ' + result);
    //this.setState({value: result});

    alert('A data da próxima vacina é: ' + this.state.value);
    event.preventDefault();
  
  }

  render() {
    return (
      <div>
          <div className= "logo">
            <img src= {logo} alt="Senhora Vacina" />
          </div>
          <span className="text-span">APRAZAMENTO DE VACINAS</span>

        <form onSubmit={this.handleSubmit}>
          <label>
            <select className="pesquisa-faixa-etaria" type="checkbox" value={this.state.value} onChange={this.handleChange}>
                    <option value="" disabled>Selecione a faixa etária:</option>
                    {
                dados.categorias.map((v, i) => <option key={i}  value={i}> {v.titulo} </option>
                    )}
          </select>
          </label>

          <label>
            <select className="pesquisa-vacina" type="checkbox" value={this.state.value} onChange={this.handleChange}>
              <option value="" disabled>Selecione a vacina:</option>
              {
                dadosVAC.map((v, i) => <option key={i}  value={i}> {v.vacina} </option>
              )}
*/}
            </select>
          </label>

          <label>
            <input type="date" className="pesquisa-data" value={this.state.value} onChange={this.handleDate}/>
          </label>

          <label>

            <input className="pesquisa-button" type="submit" value="Enviar" />
          </label>
        </form>

      </div>
    );
  }
}

export default PrazoVacinas;