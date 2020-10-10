import { environment } from './../../../../environments/environment.prod';
import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../core/services/product.service';
import { Product } from '../../../core/modal/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.productService.getDataToLocal(environment.productsKey);
    // debugger;
  }

}
