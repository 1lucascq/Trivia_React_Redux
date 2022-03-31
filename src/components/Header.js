import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  checkPathname(history) {
    if (history) {
      const {
        location: { pathname },
      } = history;
      if (pathname === '/feedback') return true;
    }
    return false;
  }

  render() {
    const { name, score, gravatarImage, history } = this.props;
    return (
      <header
        className="bg-fundo
        text-white container-fluid d-flex justify-content-between align-items-center py-3"
      >
        <div className="d-flex flex-direction-row align-items-center">
          <img
            className="rounded-circle me-2"
            data-testid="header-profile-picture"
            src={ gravatarImage }
            alt="Player Gravatar"
          />
          <h2 className="navbar-text " data-testid="header-player-name">
            {name}
          </h2>
        </div>

        {this.checkPathname(history) ? (
          ''
        ) : (
          <h2 className="text-center">
            {' '}
            {`Score: ${score}`}
            {' '}
          </h2>
        )}

        <Link className="navbar-brand text-warning h1" to="/">
          Sair
        </Link>
      </header>
    );
  }
}

Header.propTypes = {
  gravatarImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  name: state.login.name,
  score: state.gameData.player.score,
  gravatarImage: state.login.gravatarImage,
});

export default connect(mapStateToProps)(Header);
