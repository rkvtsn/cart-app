import { Product } from 'domains/Product';
import { Purchase } from 'domains/Purchase';

const MockDetstvo: Product = {
  id: 1,
  name: 'detstvo',
  description: 'Gentle Hand & Body Wash',
  value: 150,
  price: 3500,
  image: 'detstvo',
  photo: 'polaroidDetstvo',
};

const MockPrekrasnoeDalyoko: Product = {
  id: 2,
  name: 'PREKRASNOE DALYOKO',
  description: 'Moisturizing & Repairing Hand Cream',
  value: 150,
  price: 3500,
  image: 'prekrasnoeDalyoko',
  photo: 'polaroidPrekrasnoe',
};

const MockSuspiria: Product = {
  id: 3,
  name: 'suspiria',
  description: 'bath tea',
  value: 150,
  price: 3500,
  image: 'suspiria',
  photo: 'polaroidSuspiria',
};

const MockHandCreamDetstvo: Product = {
  id: 4,
  name: 'Hand Cream DETSTVO',
  description: 'Moisturizing & Repairing',
  value: 150,
  price: 2500,
  image: 'detstvoCream',
  photo: 'polaroidDetstvo',
};

const MockSuspiriaGel: Product = {
  id: 5,
  name: 'SUSPIRIA',
  description: 'Love Gel',
  value: 50,
  price: 2500,
  image: 'suspiriaGel',
  photo: 'polaroidSuspiria',
};

const MockPurchases: Purchase[] = [
  {
    id: 1,
    count: 1,
    product: MockHandCreamDetstvo,
  },
  {
    id: 2,
    count: 1,
    product: MockSuspiriaGel,
  },
];

const MockRecomended: Product[] = [
  MockDetstvo,
  MockPrekrasnoeDalyoko,
  MockSuspiria,
];

export {
  MockPurchases,
  MockRecomended,
  MockDetstvo,
  MockHandCreamDetstvo,
  MockPrekrasnoeDalyoko,
  MockSuspiria,
  MockSuspiriaGel,
};
