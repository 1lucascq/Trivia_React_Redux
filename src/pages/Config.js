import React, { useContext } from 'react';
import ConfigContext from '../context/ConfigContext';
import Provider from '../context/Provider';
import { renderDifficulties, renderTypes } from '../helpers/renderInputsInConfig';

function Config() {
  const { category, categories, setCategory, difficulty, setDifficulty,
    handleSubmit, history, type, setType } = useContext(ConfigContext);
  return (
    <Provider>
      <h1 data-testid="settings-title">Configurações</h1>

      <form onSubmit={ handleSubmit }>
        <label htmlFor="category">
          Categoria:
          <select
            type="text"
            name="category"
            id="category"
            value={ category }
            onChange={ ({ target }) => setCategory(target.value) }
          >
            <option key="" value="">
              Todas as Categorias
            </option>
            {categories.map((item) => (
              <option key={ item.id } value={ item.id }>
                {item.name}
              </option>
            ))}
          </select>
        </label>
        {renderDifficulties(difficulty, setDifficulty)}
        {renderTypes(type, setType)}
        {/* <ConfigInputs /> */}

        <button type="submit">Configurar</button>
      </form>
      <button type="button" onClick={ () => history.push('/') }>
        Voltar
      </button>
    </Provider>
  );
}

export default Config;
