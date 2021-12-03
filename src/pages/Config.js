import React, { useContext } from 'react';
import DifficultySelect from '../components/ConfigInputs/DifficultiesSelect';
import TypesSelect from '../components/ConfigInputs/TypesSelect';
import ConfigContext from '../context/ConfigContext';
import CategoriesSelect from '../components/ConfigInputs/CategoriesSelect';

function Config() {
  const {
    category,
    categories,
    setCategory,
    difficulty,
    setDifficulty,
    handleSubmit,
    history,
    type,
    setType,
  } = useContext(ConfigContext);
  return (
    <section className="config">
      <h1 className="text-center display-3 py-3">Configurações</h1>

      <div className="wrapper">
        <form className="form form-control form-login" onSubmit={ handleSubmit }>
          <CategoriesSelect
            category={ category }
            setCategory={ setCategory }
            categories={ categories }
          />
          <DifficultySelect
            difficulty={ difficulty }
            setDifficulty={ setDifficulty }
          />
          <TypesSelect type={ type } setType={ setType } />

          <div className="form-position-buttons">
            <button className="btn btn-success bnt-login" type="submit">
              Configurar
            </button>
            <button
              className="btn btn-warning bnt-login"
              type="button"
              onClick={ () => history.push('/') }
            >
              Voltar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Config;
