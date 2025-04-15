export interface Users {
  id?: number | string;
  name: string;
  sdt: string;
  email: string;
  password: string;
  year: string;
  cinema: string;
  status: string | number;
  role: string | number;
  type_admin?: string | number;
}
