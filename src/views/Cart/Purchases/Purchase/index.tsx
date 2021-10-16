import { PurchaseProps } from './types';
import Counter from 'components/Counter';
import Clipart from 'components/Clipart';
import './styles.scss';

const Purchase = ({ onUpdatePurchase, ...purchase }: PurchaseProps) => {
  const { product, count } = purchase;
  const handleChangeCount = (value: number) => {
    onUpdatePurchase({ ...purchase, count: value });
  };
  const handleRemovePurchase = () => {};
  return (
    <div className="purchase">
      <div className="purchase__image">
        <Clipart image={product.image} alt={product.name} />
      </div>
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
          <Counter min={1} onChange={handleChangeCount} value={count} />
        </div>
      </div>
    </div>
  );
};

export default Purchase;
