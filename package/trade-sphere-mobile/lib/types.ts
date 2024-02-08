export type RegisterCustomer = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
};

export type LoginCustomer = {
  email: string;
  password: string;
};
