import { SellarUpdateProductComponent } from './sellar-update-product/sellar-update-product.component';
import { SellarAddProductComponent } from './sellar-add-product/sellar-add-product.component';
import { SellarHomeComponent } from './sellar-home/sellar-home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellarComponent } from './sellar/sellar.component';
import { AuthsGuard } from './auths.guard';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sellar-page',
    component: SellarComponent
  },
  {
  path:'sellar-home',
  canActivate:[AuthsGuard],
  component:SellarHomeComponent
},
{
  path:'sellar-add-product',
  canActivate:[AuthsGuard],
  component:SellarAddProductComponent
},
{
  path:'sellar-update-product/:id',
  canActivate:[AuthsGuard],
  component:SellarUpdateProductComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
