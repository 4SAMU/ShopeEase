// Type for the Rating object
export interface IRating {
  rate: number;
  count: number;
}

// Type for the Product object
export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: IRating;
}

export interface ProductInCart {
  productId: number;
  quantity: number;
}

// Type for the Cart object
export interface ICarts {
  id: number;
  userId: number;
  products: ProductInCart[];
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
}

// Type for the single Cart object
export interface ISingleCart {
  id: number;
  userId: number;
  date: string;
  products: ProductInCart[];
  __v: number;
}

export interface ICartItem extends IProduct {
  quantity: number;
}
