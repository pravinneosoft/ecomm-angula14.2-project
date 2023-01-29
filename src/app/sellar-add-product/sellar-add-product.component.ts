import { product } from '../data-type';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sellar-add-product',
  templateUrl: './sellar-add-product.component.html',
  styleUrls: ['./sellar-add-product.component.css'],
  // providers:[ProductService]
})
export class SellarAddProductComponent implements OnInit {
  constructor(private products: ProductService) {}
  addProductmessage:string | undefined;
  ngOnInit(): void {}
  submit(data: product) {
    this.products.addproduct(data).subscribe((result) => {
      if(result){
        this.addProductmessage="Product added successfully";
        }
        setTimeout(() => {
          this.addProductmessage=undefined;
        }, 3000);
    });
  }
}
