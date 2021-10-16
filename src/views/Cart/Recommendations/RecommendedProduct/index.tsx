import { useCallback } from 'react';
import HeartIcon from 'components/Icons/HeartIcon';
import ProductPhoto from './ProductPhoto';
import { RecommendedProductProps } from './types';
import './styles.scss';

const RecommendedProduct = ({ onAdd, ...product }: RecommendedProductProps) => {
  const { image, name, description, price, value, photo } = product;

  const handleAddToCart = useCallback(() => {
    onAdd(product);
  }, [onAdd, product]);

  return (
    <div className="recommended-product">
      <ProductPhoto name={name} image={image} photo={photo} />
      <HeartIcon />
      <div className="recommended-product__name">{name}</div>
      <div className="recommended-product__description highlight">
        {description}
      </div>
      <div className="recommended-product__info">
        <div>{value}мл</div>
        <div className="recommended-product__info-price">
          {price}
          <i className="icon icon-rub" />
        </div>
      </div>
      <button className="recommended-product__add" onClick={handleAddToCart}>
        <span className="recommended-product__add-text">в корзину</span>
        <span className="recommended-product__add-icon">&#43;</span>
      </button>
    </div>
  );
};

export default RecommendedProduct;
