import { useCallback, useEffect, useState } from 'react';
import { Product } from 'domains/Product';
import { Purchase } from 'domains/Purchase';
import { MockPurchases, MockRecomended } from 'mock/cart';
import Cart from 'views/Cart';

function App() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [recomended, setRecomended] = useState<Product[]>([]);

  useEffect(() => {
    setPurchases(MockPurchases);
    setRecomended(MockRecomended);
  }, []);

  const handleChangePurhcases = useCallback(() => {}, []);

  return (
    <div>
      <Cart
        onChangePurchases={handleChangePurhcases}
        purchases={purchases}
        recommended={recomended}
      />
    </div>
  );
}

export default App;
