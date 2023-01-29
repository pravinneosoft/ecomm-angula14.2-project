import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { login ,signup } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellarLoggedin=new BehaviorSubject <boolean>(false);
isLoginError=new EventEmitter <boolean>(false)
  constructor(private http:HttpClient ,private route:Router) {}
    userSignup(data:signup){
       this.http.post('http://localhost:3000/seller',data,{observe:'response'})
      .subscribe((result)=>{
        this.isSellarLoggedin.next(true);
        localStorage.setItem('sellar',JSON.stringify(result.body));
        this.route.navigate(['sellar-home'])
        console.log(result)
      })

    }
    reloadsellar(){
        if(localStorage.getItem('sellar')){
          this.isSellarLoggedin.next(true);
          this.route.navigate(['sellar-home'])
        }
    }
    userlogin(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'}).subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        localStorage.setItem('sellar',JSON.stringify(result.body));
        this.route.navigate(['sellar-home'])
      }
      else{
       this.isLoginError.emit(true)
      }
    })
    }
}
