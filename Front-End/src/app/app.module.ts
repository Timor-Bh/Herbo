import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WavesModule, ButtonsModule,  } from 'angular-bootstrap-md';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './HomePage/home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SlidesComponent } from './HomePage/slides/slides.component';
import { CardsComponent } from './HomePage/cards/cards.component';
import { IconsComponent } from './HomePage/home/icons/icons.component';
import { CosmeticHerbsComponent } from './cosmetic-herbs/cosmetic-herbs.component';
import { HeaderComponent } from './cosmetic-herbs/header/header.component';
import { ParagraphComponent } from './cosmetic-herbs/paragraph/paragraph.component';
import { CosmeticherbscardsComponent } from './cosmetic-herbs/cosmeticherbscards/cosmeticherbscards.component';
import { MedicalHerbsComponent } from './medical-herbs/medical-herbs.component';
import { ExtraComponent } from './medical-herbs/extra/extra.component';
import { MedicalherbscardsComponent } from './medical-herbs/medicalherbscards/medicalherbscards.component';
import { Paragraph2Component } from './medical-herbs/paragraph2/paragraph2.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { OurproductscardComponent } from './our-products/ourproductscard/ourproductscard.component';
import { AllproductscardsComponent } from './products/allproductscards/allproductscards.component';
import { ProductComponent } from './product/product.component';
import { CommentSectionComponent } from './product/comment-section/comment-section.component';
import { CommentComponent } from './product/comment-section/comment/comment.component';
import { AddCommentComponent } from './product/comment-section/add-comment/add-comment.component';
import { AddProductComponent } from './add-product/add-product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './orders/order/order.component';
import { CartComponent } from './cart/cart.component';
import { CartsComponent } from './cart/carts/carts.component';
import { BillComponent } from './cart/bill/bill.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    FooterComponent,
    RoutingComponents,
    ProductsComponent,
    UserProfileComponent,
    SlidesComponent,
    CardsComponent,
    IconsComponent,
    CosmeticHerbsComponent,
    HeaderComponent,
    ParagraphComponent,
    CosmeticherbscardsComponent,
    MedicalHerbsComponent,
    ExtraComponent,
    MedicalherbscardsComponent,
    Paragraph2Component,
    OurProductsComponent,
    OurproductscardComponent,
    AllproductscardsComponent,
    ProductComponent,
    CommentSectionComponent,
    CommentComponent,
    AddCommentComponent,
    AddProductComponent,
    OrdersComponent,
    OrderComponent,
    CartComponent,
    CartsComponent,
    BillComponent,
    HistoryComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MDBBootstrapModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    ButtonsModule,
    // tslint:disable-next-line: deprecation
    StorageServiceModule,

  ],
  schemas: [],
  providers: [/*DataService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
