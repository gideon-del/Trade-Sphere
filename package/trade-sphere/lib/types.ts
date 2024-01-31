export type RegisterUser = {
  name: string;
  email: string;
  bussiness_name: string;
  bussiness_logo?: string;
  password: string;
};
export type LoginUser = {
  email: string;
  password: string;
};

export type AddProductForm = {
  name: string;
  price: number;
  quantity: number;
  description: string;
  category_id: string;
};
