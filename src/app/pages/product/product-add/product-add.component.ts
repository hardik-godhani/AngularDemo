import { environment } from './../../../../environments/environment';
import { ProductService } from '../../../core/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/core/modal/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  isEdit = false;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private route: Router) {
    let nextCode = this.productService.getDataToLocal(environment.productsKey).length + 1;
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      price: [0, [Validators.required]],
      code: [nextCode, [Validators.required]],
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
    if (this.productForm.invalid) {
      for (const i in this.productForm.controls) {
        this.productForm.controls[i].markAsDirty();
        this.productForm.controls[i].updateValueAndValidity();
      }
      return;
    }
    let product = new Product();
    product.name = this.val.name.value;
    product.code = this.val.code.value;
    product.desc = this.val.desc.value;
    product.hsnCode = this.val.hsnCode.value;
    product.price = this.val.price.value;
    product.image = this.val.image.value ? this.val.image.value : 'https://cdn.statically.io/img/statically.io/images/misc/clouds.jpg?format=webp';
    if(this.isEdit) {
      product.id = 0;
      this.productService.editProduct(product);
    } else {
      this.productService.addProduct(product);
    }
    this.route.navigate(['/products']);
  }

}
