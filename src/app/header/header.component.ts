import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menutype:string='default';
  sellarName:string='';
  constructor(private routes: Router) {}

  ngOnInit(): void {

    this.routes.events.subscribe((value:any) => {

      if (localStorage.getItem('sellar') && value.url.includes('sellar')) {
       this.menutype="sellar";
      //  console.log("i am in sellar area")
       if(localStorage.getItem('sellar')){
           let sellarstores = localStorage.getItem('sellar');
           let sellardata = sellarstores && JSON.parse(sellarstores)[0];
             this.sellarName=sellardata.name
       }
      } else {
        // console.log("i am outside sellar area")
        this.menutype="default";
      }
      // console.log("ddd")
    });

  } logout(){
    localStorage.removeItem("sellar");
    this.routes.navigate(["/"])
 }
}
