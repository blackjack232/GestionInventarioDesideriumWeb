export default interface Producto {
  id: number;
  name: string;
  title: string;
  description: string;
  imagePath: string[];
  price: number;
  priceBuy: number;
  sizeBralette: string[];
  sizePanty: string[];
  color: string[];
  amountMl: number;
  category: string;
}