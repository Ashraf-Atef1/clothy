import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import {FETCH_CATEGORIES_START} from '../../store/category/category.reducer'
import { useDispatch } from 'react-redux';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(FETCH_CATEGORIES_START());
  }, []);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
