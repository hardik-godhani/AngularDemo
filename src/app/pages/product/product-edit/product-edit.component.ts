import { ProductService } from './../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/modal/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  isEdit = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      code: [''],
      image: [''],
      hsnCode: [''],
      desc: [''],
    })
   }

  ngOnInit(): void {
  }

  get val() {
    return this.productForm.controls;
  }

  onSubmit(){
    let product = new Product();
    product.name = 'Pro1';
    product.code = 'Pro1';
    product.desc = 'Pro1';
    product.hsnCode = 'Pro1';
    product.price = 123;
    product.image = 'Pro1';
    if(this.isEdit) {
      product.id = 0;
      this.productService.editProduct(product);
    } else {
      this.productService.addProduct(product);
    }
  }

}
