import { ProductService } from './../../../core/services/product.service';
import { Product } from './../../../core/modal/product';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  @Input() product: Product;
  @Output() refreshList = new EventEmitter();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  productDelete(data) {
    this.productService.deleteProduct(data);
    this.refreshList.next();
  }
}
