export class Product {
  id: number;
  name: string;
  code: string;
  image: string;
  HsnCode: string;
  Price: string;
  desc: string;

  constructor() {
    this.id = (new Date()).getTime(); // for unique id of product
  }
}
