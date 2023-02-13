
export interface IProduct{
    id: number,
    name: string,
    year: number,
   color: string,
    pantone_value: string,
}

export interface UserState {
  total_pages: number;
  total: number;
  data: [
    {
      id: number;
      name: string;
      year: number;
      color: string;
      pantone_value: string;
    }
  ];
}