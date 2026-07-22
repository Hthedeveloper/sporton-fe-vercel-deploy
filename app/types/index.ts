export interface Category {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: Category;
  stock: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface Bank {
  _id: string;
  bankName: string;
  accountName: string;
  accountNumber: string;
  createdAt: string;
  updateAt: string;
}

export interface PurchasedItem {
  productId: string;
  qty: number;
}

export interface Transaction {
  _id: string;
  paymentProof: string;
  status: "pending" | "paid" | "failed";
  purchasedItems: PurchasedItem[];
  totalPayment: number;
  customerName: string;
  customerContact: string;
  customerAddress: string;
  createdAt: string;
  updatedAt: string;
}
