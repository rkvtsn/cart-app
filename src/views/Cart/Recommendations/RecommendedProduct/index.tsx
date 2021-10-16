import HeartIcon from 'components/Icons/HeartIcon';
import ProductPhoto from './ProductPhoto';
import { RecommendedProductProps } from './types';
import './styles.scss';

const RecommendedProduct = ({
  id,
  image,
  name,
  description,
  price,
  value,
}: RecommendedProductProps) => {
  return (
    <div className="recommended-product">
      <ProductPhoto name={name} image={image} />
      <HeartIcon />
      <div className="recommended-product__name">{name}</div>
      <div className="recommended-product__description">{description}</div>
      <div className="recommended-product__info">
        <div>{value}мл</div>
        <div className="recommended-product__info-price">
          {price}
          <i className="icon icon-rub" />
        </div>
      </div>
      <button className="recommended-product__add">
        <span className="recommended-product__add-text">в корзину</span>
        <span className="recommended-product__add-icon">+</span>
      </button>
    </div>
  );
};

export default RecommendedProduct;
