export class Product {
  id: number;
  name: string;
  code: string;
  image: string;
  hsnCode: string;
  price: number;
  desc: string;

  constructor() {
    this.id = (new Date()).getTime(); // for unique id of product
  }
}
