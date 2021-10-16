import { RecommendationsProps } from './types';
import './styles.scss';
import RecommendedProduct from './RecommendedProduct';

const Recommendations = ({ recommended }: RecommendationsProps) => {
  return (
    <div className="recommendations">
      <h2>Рекомендуем добавить</h2>
      <div className="recommended">
        {recommended.map((product) => (
          <RecommendedProduct key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
