import { HttpClient } from '@angular/common/http';
import { product } from './../data-type';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  addproduct(data: product) {
    return this.http.post('http://localhost:3000/products', data);
  }
  getproduct(){
    return this.http.get<product[]>('http://localhost:3000/products');
  }
  deleteproductitem(id:number){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
  getproductids(id:string){
    return this.http.get<product>(`http://localhost:3000/products/${id}`);
  }
  updateproduct(product: product){
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product);
  }
  popularproduct(){
    return this.http.get<product[]>('http://localhost:3000/products?_limit=3');
  }
}
