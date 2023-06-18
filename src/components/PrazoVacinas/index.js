import React, { PureComponent } from "react";

import dados from "../../vacinas.json";
import dadosVAC from "../../dados.json";

import logo from "../../assets/images/logo.png";

import './prazovacinas.css';
class PrazoVacinas extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {values:{ faixa: '', vacina: '', data: '' }};

    this.handleChangeFaixaEtaria = this.handleChangeFaixaEtaria.bind(this);
    this.handleChangeVacina = this.handleChangeVacina.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
  }

  handleChangeFaixaEtaria(event) {
    this.setState((x) => x.values.faixa = event.target.value);
  }
  handleChangeVacina(event) {
    this.setState((x) => x.values.vacina = event.target.value);
  }
  handleDate(event) {
    this.setState((x) => x.values.data = event.target.value);
  }

  handleSubmit(event) {
    // const result = this.state.value.slice();
    //result[1] = "VacinaData";
    //alert('A data da próxima vacina é: ' + result);
    //this.setState({value: result});
    console.log(this.state.values)
    alert('A data da próxima vacina é: ' + this.state.data);
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
            <select
              className="pesquisa-faixa-etaria"
              value={this.state.faixa}
              onChange={this.handleChangeFaixaEtaria}
            >
                    <option value="" disabled>Selecione a faixa etária:</option>
                    {
                dados.categorias.map((v, i) => <option key={i}  value={i}> {v.titulo} </option>
                    )}
          </select>
          </label>

          <label>
            <select
              className="pesquisa-vacina"
              value={this.state.vacina}
              onChange={this.handleChangeVacina}
            >
              <option value="" disabled>Selecione a vacina:</option>
              {
                dadosVAC.map((v, i) => <option key={i}  value={i}> {v.vacina} </option>
              )}
            </select>
          </label>

          <label>
            <input type="date" className="pesquisa-data" value={this.state.data} onChange={this.handleDate}/>
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