import { useMemo } from 'react';
import Purchases from './Purchases';
import Recommendations from './Recommendations';
import Checkout from './Checkout';
import { CartProps } from './types';
import useCart from './useCart';
import './styles.scss';

const Cart = ({ purchases, recommended, onChangePurchases }: CartProps) => {
  const { onChangePurchase, onDeletePurchase, onAddProduct, onChangeDiscount } =
    useCart({ purchases, onChangePurchases });

  const totalPrice = useMemo(() => {
    return purchases.reduce(function (a, b) {
      return a + b.product.price * b.count;
    }, 0);
  }, [purchases]);

  const finalTotalPrice = useMemo(() => {
    return purchases.reduce(function (a, b) {
      return a + b.product.price * b.count;
    }, 0);
  }, [purchases]);

  return (
    <div className="cart">
      <div className="cart-body">
        <div className="cart-content">
          <h2 className="cart-title">Корзина ({purchases.length})</h2>
          <div className="cart-info">
            Закажите на сумму от 10 000 и мы доставим заказ бесплатно!*
          </div>
          <div className="cart-disclaimer highlight">
            Товары будут зарезервированы на 60 минут
          </div>

          <Purchases
            purchases={purchases}
            onChangePurchase={onChangePurchase}
            onDeletePurchase={onDeletePurchase}
          />
        </div>

        <Checkout
          finalTotalPrice={finalTotalPrice}
          totalPrice={totalPrice}
          onDiscount={onChangeDiscount}
        />
      </div>

      <Recommendations recommended={recommended} onAddToCart={onAddProduct} />
    </div>
  );
};

export default Cart;
