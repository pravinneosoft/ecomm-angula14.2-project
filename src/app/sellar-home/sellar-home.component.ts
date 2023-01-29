import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-sellar-home',
  templateUrl: './sellar-home.component.html',
  styleUrls: ['./sellar-home.component.css']
})
export class SellarHomeComponent implements OnInit {
   productdeletemsg:string | undefined;
   deleteIcon=faTrash;
  constructor(private productdata:ProductService) { }
  productlists:undefined | product[]
  ngOnInit(): void {
 this. list()
  }
  deleteproduct(id:number){
    this.productdata.deleteproductitem(id).subscribe((result)=>{
      if(result){
        this.productdeletemsg="product delete successfully"
      }
      setTimeout(() => {
        this.productdeletemsg=undefined
      }, 3000);
    })
    this. list()
  }
  list(){
    this.productdata.getproduct().subscribe((result)=>{
      this.productlists=result;
      console.log(this.productlists)
      })
  }
  }
