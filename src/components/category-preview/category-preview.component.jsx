import ProductCard from '../product-card/product-card.component';
import {categoryIsLoadingSelector} from '../../store/category/category.selector';
import Spinner from '../../components/spinner/spinner.component';
import {useSelector} from 'react-redux';
import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
  const isLoading = useSelector(categoryIsLoadingSelector);
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        { isLoading ? <Spinner /> :
        products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
