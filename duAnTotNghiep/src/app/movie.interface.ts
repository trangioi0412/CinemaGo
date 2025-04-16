export interface Movies {
  id?: number | string;
  name: string;
  date: string;
  director: string;
  nation: string;
  age: number | string;
  category: string;
  language: string;
  time: number | string;
  text_summary: string;
  status: number | string;
  image: File | null;
  banner: File | null;
  trailer: string;
}
