import { ProductPhotoProps } from './types';
import './styles.scss';

const ProductPhoto = ({ image, name }: ProductPhotoProps) => {
  return (
    <div className="product-photo">
      <img src={image} alt={name} />
    </div>
  );
};

export default ProductPhoto;
