import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import RedirectButton from '../components/RedirectButton';
import { createRankingInLocalStore } from '../helpers/createLocalStorage';
// import trophy from '../assets/trophy.png';
import wellDone from '../assets/welldone.gif';
// import sadEmoji from '../assets/sadface.png';
import facepalm from '../assets/facepalm.gif';

class Feedback extends Component {
  constructor() {
    super();

    this.getFeedbackMessage = this.getFeedbackMessage.bind(this);
    this.getScore = this.getScore.bind(this);
    this.getAssertions = this.getAssertions.bind(this);
  }

  componentDidMount() {
    const { login, score } = this.props;
    createRankingInLocalStore(login, score);
  }

  getScore() {
    const { player: { score } } = JSON.parse(localStorage.getItem('state'));
    return score;
  }

  getAssertions() {
    const { player: { assertions } } = JSON.parse(localStorage.getItem('state'));
    return assertions;
  }

  getFeedbackMessage() {
    const assertions = this.getAssertions();
    const MIN_ASSERTIONS = 3;
    return assertions < MIN_ASSERTIONS ? 'Podia ser melhor...' : 'Mandou bem!';
  }

  getFeedbackImage() {
    const assertions = this.getAssertions();
    const MIN_ASSERTIONS = 3;
    return assertions < MIN_ASSERTIONS ? facepalm : wellDone;
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <Header history={ history } />
        <img
          src={ this.getFeedbackImage() }
          alt="sad face emoji"
          className="feedback-image"
        />
        <div className="card mx-auto mt-5 feedback-card">
          <h2 data-testid="feedback-text" className="text-center">
            {' '}
            {this.getFeedbackMessage()}
            {' '}
          </h2>
          <h2
            className="text-center"
            data-testid="feedback-total-score"
          >
            {`Pontuação: ${this.getScore()}`}
          </h2>
          <h2
            className="text-center"
            data-testid="feedback-total-question"
          >
            {`Acertos: ${this.getAssertions()}`}
          </h2>

          <div className="feedback-position-buttons">
            <RedirectButton
              className="btn btn-success bnt-login mt-3 play-again-btn"
              history={ history }
              name="Jogar novamente"
              testId="btn-play-again"
              url="/"
            />
            <RedirectButton
              className="btn btn-info bnt-login mt-3"
              history={ history }
              name="Ver Ranking"
              testId="btn-ranking"
              url="/ranking"
            />
          </div>

        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  login: state.login,
  score: state.gameData.player.score,
});

Feedback.propTypes = {
  history: PropTypes.shape(PropTypes.object).isRequired,
  login: PropTypes.objectOf(PropTypes.object).isRequired,
  score: PropTypes.number.isRequired,
};

export default connect(mapStateToProps)(Feedback);
