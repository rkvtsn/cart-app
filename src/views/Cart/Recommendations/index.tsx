import RecommendedProduct from './RecommendedProduct';
import { RecommendationsProps } from './types';
import './styles.scss';

const Recommendations = ({
  recommended,
  onAddToCart,
}: RecommendationsProps) => {
  return (
    <div className="recommendations">
      <h2>Рекомендуем добавить</h2>
      <div className="recommended">
        {recommended.map((product) => (
          <RecommendedProduct
            key={product.id}
            {...product}
            onAdd={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
