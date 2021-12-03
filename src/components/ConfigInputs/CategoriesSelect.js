import PropTypes from 'prop-types';
import React from 'react';

export default function CategoriesSelect({ category, setCategory, categories }) {
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

CategoriesSelect.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};
