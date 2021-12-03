import React from 'react';

const difficultyOptions = [
  { value: '', name: 'Todas as Dificuldades' },
  { value: 'easy', name: 'Fácil' },
  { value: 'medium', name: 'Médio' },
  { value: 'hard', name: 'Difícil' },
];

const typeOptions = [
  { value: '', name: 'Todas as Dificuldades' },
  { value: 'multiple', name: 'Múltipla Escolha' },
  { value: 'boolean', name: 'Verdadeiro ou Falso' },
];

export function renderDifficulties(difficulty, setDifficulty) {
  return (
    <label htmlFor="difficulty">
      Dificuldade:
      <select
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
