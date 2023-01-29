import { product } from './../data-type';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  popularproducts:undefined | product[];
  constructor(private popular_product:ProductService) { }

  ngOnInit(): void {
    this.popular_product.popularproduct().subscribe((result)=>{

      this.popularproducts=result;
    })
  }

}
