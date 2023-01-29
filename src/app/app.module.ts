import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SellarComponent } from './sellar/sellar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellarHomeComponent } from './sellar-home/sellar-home.component';
import { SellarAddProductComponent } from './sellar-add-product/sellar-add-product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SellarUpdateProductComponent } from './sellar-update-product/sellar-update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SellarComponent,
    HomeComponent,
    SellarHomeComponent,
    SellarAddProductComponent,
    SellarUpdateProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
