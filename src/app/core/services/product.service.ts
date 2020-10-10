import { environment } from '../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  setDataToLocal(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  }
  getDataToLocal(key) {
    const data = localStorage.getItem(key);
    if (data) {
      JSON.parse(data);
    } else { return []; }
  }
  editProduct(data) {
    const allProducts = this.getDataToLocal(environment.productsKey);
    const productIndex = allProducts.findIndex((obj => obj.id === data.id));
    if (productIndex >= 0) {
      allProducts[productIndex] = data;
      this.setDataToLocal(environment.productsKey, allProducts);
    }
  }
  addProduct(data) {
    const allProducts = this.getDataToLocal(environment.productsKey);
    allProducts.push(data);
    this.setDataToLocal(environment.productsKey, allProducts);
  }
}
