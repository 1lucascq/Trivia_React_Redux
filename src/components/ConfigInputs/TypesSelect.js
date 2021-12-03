import PropTypes from 'prop-types';
import React from 'react';

export default function TypesSelect({ type, setType }) {
  const typeOptions = [
    { value: '', name: 'Todas as Dificuldades' },
    { value: 'multiple', name: 'Múltipla Escolha' },
    { value: 'boolean', name: 'Verdadeiro ou Falso' },
  ];

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

TypesSelect.propTypes = {
  type: PropTypes.string.isRequired,
  setType: PropTypes.func.isRequired,
};
