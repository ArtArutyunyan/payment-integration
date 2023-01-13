export interface IMobileItem {
  id: number,
  image: string,
  model: string,
  price: number,
  memory: string,
  color: string
}

export interface IBasketItem {
  id: number,
  product: IMobileItem,
  count: number,
}