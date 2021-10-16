import { useCallback, useMemo } from 'react';
import Purchases from './Purchases';
import Recommendations from './Recommendations';
import Checkout from './Checkout';
import { CartProps } from './types';
import { findLastIdPurchase, findOldPurchase } from './utils';
import './styles.scss';

const Cart = ({ purchases, recommended, onChangePurchases }: CartProps) => {
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

  const handleChangePurchase = useCallback(
    ({ count, id: purchaseId }) => {
      const purchaseIndex = purchases.findIndex(({ id }) => id === purchaseId);
      if (purchaseIndex < 0) return;
      const purchasesChanged = [...purchases];
      purchasesChanged[purchaseIndex] = {
        ...purchasesChanged[purchaseIndex],
        count: count || 0,
      };
      onChangePurchases(purchasesChanged);
    },
    [onChangePurchases, purchases]
  );

  const handleDeletePurchase = useCallback(
    ({ id: purchaseId }) => {
      onChangePurchases(purchases.filter(({ id }) => id !== purchaseId));
    },
    [onChangePurchases, purchases]
  );

  const handleAddToCart = useCallback(
    (addedProduct) => {
      const oldPurchase = findOldPurchase(purchases, addedProduct);
      if (oldPurchase) {
        const updatedPurchase = { ...oldPurchase };
        updatedPurchase.count = updatedPurchase.count + 1;
        handleChangePurchase(updatedPurchase);
      } else {
        onChangePurchases([
          ...purchases,
          {
            id: findLastIdPurchase(purchases) + 1,
            product: { ...addedProduct },
            count: 1,
          },
        ]);
      }
    },
    [purchases, onChangePurchases, handleChangePurchase]
  );

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
            onChangePurchase={handleChangePurchase}
            onDeletePurchase={handleDeletePurchase}
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
        onAddToCart={handleAddToCart}
      />
    </div>
  );
};

export default Cart;
