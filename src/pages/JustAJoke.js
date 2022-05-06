import React, { Component } from 'react';
import { connect } from 'react-redux';

class JustAJoke extends Component {
  // constructor() {
  // super();
  // this.state = {
  // };
  // this.redirectToConfig = this.redirectToConfig.bind(this);
  // }

  render() {
    return (
      <div
        style={ { textAlign: 'center', width: '50%', margin: 'auto', marginTop: '50%' } }
      >
        <p>
          Digite um número de 1 a 10:
        </p>
        <input type="text" name="chute" />
        <br />
        <br />
        <button
          type="button"
          onClick={ () => alert('"Uau! Você acertou, PEGA LÁ A CERVEJA!"') }
        >
          CHUTAR
        </button>
      </div>
    );
  }
}
export default connect()(JustAJoke);
