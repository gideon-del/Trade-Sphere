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
