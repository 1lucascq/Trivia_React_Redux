import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import logo from '../trivia.png';
import '../App.css';
import { fetchCategories, fetchToken, login as loginAction } from '../redux/actions';
import UserInputs from '../components/UserInputs';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      isDisabled: true,
      redirectToConfig: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.enableBtn = this.enableBtn.bind(this);
    this.redirectToConfig = this.redirectToConfig.bind(this);
  }

  componentDidMount() {
    const { categoriesFetch } = this.props;
    categoriesFetch();
  }

  redirectToConfig() {
    this.setState({ redirectToConfig: true });
  }

  enableBtn() {
    const MIN_LENGTH = 0;
    const { email, name } = this.state;
    if (email.length > MIN_LENGTH && name.length > MIN_LENGTH) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { login, tokenToStore } = this.props;
    const { name, email } = this.state;
    const token = await tokenToStore();
    login(name, email);
    localStorage.setItem('token', JSON.stringify(token.payload.token));
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState(
      {
        [name]: value,
      },
      () => this.enableBtn(),
    );
  }

  render() {
    const { name, email, isDisabled, redirectToConfig } = this.state;
    const { logged } = this.props;
    return (
      <div className="App">
        {logged && <Redirect to="/game" />}
        { redirectToConfig && <Redirect to="/config" />}
        <header className="App-header">
          <img
            src={ logo }
            className="App-logo mb-5"
            alt="logo"
          />

          <form className="form form-control form-login">
            <UserInputs
              name={ name }
              handleChange={ this.handleChange }
              email={ email }
            />
            <div className="form-position-buttons">
              <button
                className="btn btn-success bnt-login"
                type="button"
                data-testid="btn-play"
                disabled={ isDisabled }
                onClick={ this.handleSubmit }
              >
                Login
              </button>
              <button
                className="btn btn-danger bnt-login"
                type="button"
                data-testid="btn-settings"
                onClick={ this.redirectToConfig }
              >
                Configuração
              </button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

Login.propTypes = {
  logged: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  tokenToStore: PropTypes.func.isRequired,
  categoriesFetch: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  logged: state.login.logged,
});

const mapDispatchToProps = (dispatch) => ({
  login: (name, email) => dispatch(loginAction({ name, email })),
  tokenToStore: () => dispatch(fetchToken()),
  categoriesFetch: () => dispatch(fetchCategories()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
