import { signup } from './../data-type';
import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sellar',
  templateUrl: './sellar.component.html',
  styleUrls: ['./sellar.component.css'],
})
export class SellarComponent implements OnInit {
  constructor(private sellar: SellerService, private route: Router) {}
  showlogin = false;
  authError:string='';
  ngOnInit(): void {
    // this.sellar.reloadsellar()
  }
  signup(data: signup): void {
    console.log(data);
    this.sellar.userSignup(data);

    // .subscribe((result)=>{
      // if(data){
      //   // this.route.navigate(['sellar-home'])



      // }
    // })
  }
  login(data: signup): void {
    console.log(data);
    this.authError=''
    this.sellar.userlogin(data);
    this.sellar.isLoginError.subscribe((iserror)=>{
      if(iserror){
      this.authError='email and password incorrect'}
    })
  }
  openlogin() {
    this.showlogin = true;
  }
  opensignup() {
    this.showlogin = false;
  }
}
