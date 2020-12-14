import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { HomeComponent } from './home/home.component';
import { ShoppingComponent } from './shopping/shopping.component';


const routes: Routes = [
  { path: 'addproduct', component: AddProductComponent },
  {path: 'home', component:HomeComponent},
  { path: 'shopping', component: ShoppingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
