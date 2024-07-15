import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import {categorySelector, categoryIsLoadingSelector} from '../../store/category/category.selector';
import { useSelector } from 'react-redux';
import Spinner from '../../components/spinner/spinner.component';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer, Title } from './category.styles';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(categorySelector);
  const [products, setProducts] = useState(categoriesMap[category]);
  const isLoading = useSelector(categoryIsLoadingSelector);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <Title>{category.toUpperCase()}</Title>
      {isLoading ? <Spinner /> :
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>}
    </Fragment>
  );
};

export default Category;
