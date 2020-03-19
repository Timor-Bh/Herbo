import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './HomePage/home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CosmeticHerbsComponent } from './cosmetic-herbs/cosmetic-herbs.component';
import { MedicalHerbsComponent } from './medical-herbs/medical-herbs.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { CartComponent } from './cart/cart.component';
import { HistoryComponent } from './history/history.component';




const routes: Routes = [
  {path: '', component: HomeComponent},

  {path: 'products', component: ProductsComponent},
  {path: 'cosmeticherbs', component: CosmeticHerbsComponent},
  {path: 'medicalherbs', component: MedicalHerbsComponent},
  {path: 'ourproducts', component: OurProductsComponent},

  {path: 'product', component: ProductComponent},
  {path: 'addproduct', component: AddProductComponent},

  {path: 'signup', component: SignUpComponent},
  {path: 'signin', component: SignInComponent},
  {path: 'profile', component: UserProfileComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'cart', component: CartComponent},
  {path: 'history', component: HistoryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports : [RouterModule]
})

export class AppRoutingModule {}
// tslint:disable-next-line: max-line-length
export const RoutingComponents = [ AddProductComponent, ProductComponent, OurProductsComponent, MedicalHerbsComponent, CosmeticHerbsComponent,UserProfileComponent, HomeComponent, SignUpComponent, SignInComponent, ProductsComponent];
