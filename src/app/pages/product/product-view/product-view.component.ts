import { environment } from './../../../../environments/environment';
import { ProductService } from './../../../core/services/product.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/modal/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: Product;

  constructor( private route: Router, private ProductService: ProductService) { }

  ngOnInit(): void {
    console.log(this.route.url);
    let id = this.route.url.split('/')[2];
    this.product = this.ProductService.getDataToLocal(environment.productsKey).find(ele => ele.id == id);
  }

}
