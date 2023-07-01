import React, { PureComponent } from "react";

import dados from "../../vacinas.json";
import dadosVAC from "../../dados.json";

import logo from "../../assets/images/logo.png";

import './prazovacinas.css';
class PrazoVacinas extends PureComponent {

  constructor(props) {
    super(props);
    this.state = { values: { faixaetaria: '', vacina: '', data: '', dose: '' } };

    this.handleChangeFaixaEtaria = this.handleChangeFaixaEtaria.bind(this);
    this.handleChangeVacina = this.handleChangeVacina.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleDose = this.handleDose.bind(this);
  }

  handleChangeFaixaEtaria(event) {
    this.setState((x) => x.values.faixa = event.target.value);
  }

  handleChangeVacina(event) {
    this.setState((x) => x.values.vacina = event.target.value);
  }

  handleDate(event) {
    this.setState({ value: { data: event.target.value } });
  }

  handleDose(event) {
    this.setState({ value: { dose: event.target.value } });
  }

  handleSubmit(event) {

    const vacinas = fetch('vacinas.json')
      .then(response => response.json())
      .then(response => {
        const titulo = [
          "Recém-nascido",
          "Adulto",
          "Idoso",
          "Criança",
          "Adolescente",
          "Gestante"
        ];

        const faixaetaria = [
          "vacinasrn",
          "vacinascrianca",
          "vacinasadulto",
          "vacinasidoso",
          "vacinasgestante"
        ];

        const intervaloDose = [
          "idaderecom_dose01",
          "idaderecom_dose02",
          "idaderecom_dose03"
        ];

        return { titulo, faixaetaria, intervaloDose, };

      });

    var titulo = this.state.value.faixa.slice();

    if (titulo === "Recém-nascido") {
      alert("Dose única ao nascer.");
      event.preventDefault();
    }

    else {
      const intervaloEmDias = 21;
      const dataUltimaDose = new Date(this.state.value.data.slice()); // Substitua pela data real da última dose

      const dataProximaDose = new Date(dataUltimaDose);
      dataProximaDose.setDate(dataProximaDose.getDate() + intervaloEmDias);

      alert('A data da próxima vacina é: ' + dataProximaDose.toLocaleDateString("pt-BR"));
      event.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <div className="logo">
          <figure class="logo-vac">
            <img src={logo} alt="Senhora Vacina" />
          </figure>
          <span className="text-span">APRAZAMENTO DE VACINAS</span>
        </div>

        <form class="form" onSubmit={this.handleSubmit}>
          <label>
            <select id="faixaet" class="sel-pesquisa pesquisa-faixa-etaria" type="checkbox" value={this.state.faixa} onChange={this.handleChangeFaixaEtaria}>
              <option value="" disabled>Selecione a faixa etária:</option>
              {
                dados.categorias.map(
                  (v, i) => <option key={i} value={i}> {v.titulo} </option>
                )
              }
            </select>
          </label>

          <label>
            <select class="sel-pesquisa pesquisa-vacina" type="checkbox" value={this.state.vacina} onChange={this.handleChangeVacina}>
              <option value="" disabled>Selecione a vacina:</option>
              {
                dadosVAC.map(
                  (v, i) => <option key={i} value={i}> {v.vacina} </option>
                )
              }
            </select>
          </label>

          <label>
            <input type="date" class="sel-pesquisa pesquisa-data" value={this.state.data} onChange={this.handleDate} />
          </label>

          <label>
            <select id="quant-dose" class="sel-pesquisa pequisa-dose" type="checkbox" value={this.state.dose} onChange={this.handleDose}>
              <option value="" disabled>Selecione a quantidade de dose já tomadas:</option>
              <option value="1">1 (uma) dose</option>
              <option value="2">2 (duas) doses</option>
              <option value="3">3 (três) doses</option>
            </select>
          </label>

          <button class="pesquisa-button" type="submit" value="Enviar">Calcular</button>
        </form>

      </div>
    );
  }
}

export default PrazoVacinas;