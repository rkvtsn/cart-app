import { useCallback, useMemo } from 'react';
import Purchases from './Purchases';
import Recommendations from './Recommendations';
import Checkout from './Checkout';
import { CartProps } from './types';
import './styles.scss';

const Cart = ({ purchases, recommended, onChangePurchases }: CartProps) => {
  const totalPrice = useMemo(() => {
    return purchases.reduce(function (a, b) {
      return a + b.product.price;
    }, 0);
  }, [purchases]);

  const finalTotalPrice = useMemo(() => {
    return purchases.reduce(function (a, b) {
      return a + b.product.price;
    }, 0);
  }, [purchases]);

  const handleChangeDiscount = useCallback(() => {}, []);
  return (
    <div className="cart">
      <div className="cart-body">
        <div>
          <h2 className="cart-title">Корзина ({purchases.length})</h2>
          <div className="cart-info">
            Закажите на сумму от 10 000 и мы доставим заказ бесплатно!*
          </div>
          <div className="cart-disclaimer highlight">
            Товары будут зарезервированы на 60 минут
          </div>
          <Purchases
            purchases={purchases}
            onChangePurchases={onChangePurchases}
          />
        </div>
        <Checkout
          finalTotalPrice={finalTotalPrice}
          totalPrice={totalPrice}
          onDiscount={handleChangeDiscount}
        />
      </div>

      <Recommendations
        recommended={recommended}
        onChangePurchases={onChangePurchases}
      />
    </div>
  );
};

export default Cart;
