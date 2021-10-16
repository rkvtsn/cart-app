import { PurchaseProps } from './types';
import Counter from './Counter';
import './styles.scss';

const Purchase = ({ product, count, onUpdatePurchase }: PurchaseProps) => {
  const handleChangeCount = () => {};
  const handleRemovePurchase = () => {};
  return (
    <div className="purchase">
      <img src={product.image} alt={product.name} />
      <div className="purchase__details">
        <div className="purchase__info-row">
          <div>
            <span className="purchase-description">{product.description}</span>{' '}
            <span className="purchase-name">{product.name}</span>,
            {product.value}
            мл
          </div>
          <button className="close">×</button>
        </div>
        <div className="purchase__info-row">
          <span>
            {product.price}
            <i className="icon icon-rub" />
          </span>
          <Counter onChange={handleChangeCount} value={count} />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
