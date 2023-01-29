import { product } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-sellar-update-product',
  templateUrl: './sellar-update-product.component.html',
  styleUrls: ['./sellar-update-product.component.css']
})
export class SellarUpdateProductComponent implements OnInit {
   productData:undefined | product  //fill the data in form
   updatemsg: undefined |string
  constructor(private route:ActivatedRoute , private products:ProductService) { }

  ngOnInit(): void {
   let productId = this.route.snapshot.paramMap.get('id');
   console.log(productId)
   productId && this.products.getproductids(productId).subscribe((data)=>{
// console.log(data);

   this.productData=data;
   })
  }
  submit(data:product){
    if(this.productData){
    data.id=this.productData.id
    }
    this.products.updateproduct(data).subscribe((result)=>{
      if(result){
this.updatemsg="product updated successfully"
      }
      setTimeout(() => {
        this.updatemsg=undefined
      }, 6000);
    })
  }

}
