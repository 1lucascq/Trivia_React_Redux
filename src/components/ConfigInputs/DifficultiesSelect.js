import PropTypes from 'prop-types';
import React from 'react';

export default function DifficultySelect({ difficulty, setDifficulty }) {
  const difficultyOptions = [
    { value: '', name: 'Todas as Dificuldades' },
    { value: 'easy', name: 'Fácil' },
    { value: 'medium', name: 'Médio' },
    { value: 'hard', name: 'Difícil' },
  ];

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

DifficultySelect.propTypes = {
  difficulty: PropTypes.string.isRequired,
  setDifficulty: PropTypes.func.isRequired,
};
