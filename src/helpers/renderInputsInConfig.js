import React from 'react';

export function renderCategories(category, setCategory, categories) {
  return (
    <label htmlFor="category">
      Categoria:
      <select
        className="form-control mt-1 mb-3 input-login"
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
  );
}

export function renderDifficulties(difficulty, setDifficulty) {
  return (
    <label htmlFor="difficulty">
      Dificuldade:
      <select
        className="form-control mt-1 mb-3 input-login"
        type="text"
        name="difficulty"
        id="difficulty"
        value={ difficulty }
        onChange={ ({ target }) => setDifficulty(target.value) }
      >
        {difficultyOptions.map((diff) => (
          <option key={ diff.value } value={ diff.value }>
            {diff.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export function renderTypes(type, setType) {
  return (
    <label htmlFor="type">
      Tipo:
      <select
        className="form-control mt-1 mb-3 input-login"
        type="text"
        name="type"
        id="type"
        value={ type }
        onChange={ ({ target }) => setType(target.value) }
      >
        {typeOptions.map((tp) => (
          <option key={ tp.value } value={ tp.value }>
            {tp.name}
          </option>
        ))}
      </select>
    </label>
  );
}
