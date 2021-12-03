import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  constructor() {
    super();
    this.handleRanking = this.handleRanking.bind(this);
    this.orderRanking = this.orderRanking.bind(this);
  }

  orderRanking() {
    const ranking = JSON.parse(localStorage.getItem('ranking') || '[]');
    if (ranking.length > 0) {
      ranking.sort((a, b) => b.score - a.score);
    }
    console.log(ranking);
    return ranking;
  }

  handleRanking(ranking) {
    return ranking.map((player, index) => (
      <li
        className="list-group-item d-flex justify-content-between
        align-items-center rank-item"
        key={ index }
      >
        <span>
          <img
            data-testid={ `player-image-${index}` }
            src={ player.picture }
            alt={ player.name }
          />
        </span>
        <span data-testid={ `player-name-${index}` }>{player.name}</span>
        <span
          className="badge-primary badge-pill"
          data-testid={ `player-score-${index}` }
        >
          {player.score}
        </span>
      </li>
    ));
  }

  render() {
    const state = this.orderRanking();
    return (
      <div className="ranking-div">
        <h1 className="text-center bg-fundo py-3" data-testid="ranking-title">Ranking</h1>
        <ul
          className="list-group d-flex mx-auto container rank-ul"
        >
          {this.handleRanking(state)}
        </ul>
        <Link to="/">
          <button
            className="btn btn-dark btn-go-home"
            type="button"
            data-testid="btn-go-home"
          >
            Home
          </button>
        </Link>
      </div>
    );
  }
}
export default connect()(Ranking);
