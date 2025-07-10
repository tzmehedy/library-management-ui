
export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  copies: number;
  available: boolean;
  description: string;
  updatedAt:string;
  createdAt: string;
}
