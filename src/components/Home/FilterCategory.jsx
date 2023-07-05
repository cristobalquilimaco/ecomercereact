import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllProductsThunk } from '../../store/slices/products.slices';
import useFetch from '../../hooks/useFetch';
import '../Home/styles/filterCategory.css'

const FilterCategory = () => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_URL

  const dispatch = useDispatch();

  const [showFilter, setShowFilter] = useState(true);

  const url = `${URL_BASE}/categories`;

  
  const [categories, getAllCategories] = useFetch(url);

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleClickCategories = (id) => {
    const url =  `${URL_BASE}/products?categoryId=${id}`
    dispatch(getAllProductsThunk(url));
  };

  const handleClickToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleClickAllProducts = () => {
    dispatch(getAllProductsThunk());
  };

  return (
    <div className='filter__category'>
      <h3>Filter Category</h3>

      <button onClick={handleClickToggleFilter}>
        {showFilter ? 'Hide categories' : 'Show categories'}
      </button>
      {showFilter && (
        <div>
          <ul>
            <li onClick={handleClickAllProducts}>All Products</li>
            {categories?.map((category) => (
              <li onClick={() => handleClickCategories(category.id)} key={category.id}>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterCategory;