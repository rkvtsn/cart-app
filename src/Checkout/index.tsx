import './styles.scss';

export interface CheckoutProps {
  totalPrice: number;
  finalTotalPrice: number;
  onDiscount: (coupon: string) => void;
}

const Checkout = ({
  totalPrice,
  finalTotalPrice,
  onDiscount,
}: CheckoutProps) => {
  return (
    <div className="checkout">
      <h2>ваш заказ</h2>

      <div>
        <div>Товаров на сумму:</div>
        <div>
          {totalPrice}
          <i className="icon icon-rub" />
        </div>
      </div>
      <div>
        <div>Стоимость доставки:</div>
        <div>Расчёт на следующем шаге</div>
      </div>

      <div>
        <input
          type="text"
          placeholder="Введите промокод"
          className="checkout-coupon"
        />
      </div>

      <div>
        <div>итого</div>
        <div>
          {finalTotalPrice}
          <i className="icon icon-rub" />
        </div>
      </div>

      <button>оформить заказ</button>
    </div>
  );
};

export default Checkout;
