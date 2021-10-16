import { ProductPhotoProps } from './types';
import Clipart from 'components/Clipart';
import './styles.scss';

const ProductPhoto = ({ image, name, photo }: ProductPhotoProps) => {
  return (
    <div className="product-photo">
      <div className="product-photo__polaroid">
        <Clipart
          className="product-photo__polaroid-photo"
          image={photo}
          alt={name}
        />
      </div>
      <div className="product-photo__product">
        <Clipart image={image} alt={name} />
      </div>
    </div>
  );
};

export default ProductPhoto;
