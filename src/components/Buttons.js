import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Buttons extends Component {
  render() {
    const { disabled, testId, text, onClick, style } = this.props;
    return (
      <button
        className="btn btn-light text-light w-50
        my-2 mx-auto list-group-item rounded-pill bg-dark"
        disabled={ disabled }
        type="button"
        data-testid={ testId }
        onClick={ onClick !== null && onClick }
        style={ style }
      >
        {text}
      </button>
    );
  }
}

Buttons.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  testId: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.shape(PropTypes.object.isRequired),
};

Buttons.defaultProps = {
  disabled: undefined,
  style: undefined,
};
