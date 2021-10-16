import { useCallback } from 'react';
import Counter from 'components/Counter';
import Clipart from 'components/Clipart';
import { PurchaseProps } from './types';
import './styles.scss';

const Purchase = ({
  onUpdatePurchase,
  onDeletePurchase,
  ...purchase
}: PurchaseProps) => {
  const { product, count } = purchase;

  const handleChangeCount = useCallback(
    (value: number) => {
      onUpdatePurchase({ ...purchase, count: value });
    },
    [onUpdatePurchase, purchase]
  );

  const handleRemovePurchase = useCallback(() => {
    onDeletePurchase(purchase);
  }, [purchase, onDeletePurchase]);

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
          <button className="close" onClick={handleRemovePurchase}>
            ×
          </button>
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
