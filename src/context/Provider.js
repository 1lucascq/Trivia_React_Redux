// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import ConfigContext from './ConfigContext';
import { configOptions } from '../redux/actions';

function Provider({ children, categories, configFetchOptions }) {
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [type, setType] = useState('');
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const options = { category, difficulty, type };
    console.log(options);
    configFetchOptions(options);
    history.push('/');
  }

  return (
    <ConfigContext.Provider
      value={
        { category,
          difficulty,
          type,
          setCategory,
          setDifficulty,
          setType,
          categories,
          history,
          handleSubmit }
      }
    >
      {children}
    </ConfigContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  configFetchOptions: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  categories: state.configReducer.categories,
});

const mapDispatchToProps = { configFetchOptions: configOptions };

// PEGAR esses dados que eu mandei e fazer a renderização conforme na hora do fetch

export default connect(mapStateToProps, mapDispatchToProps)(Provider);
