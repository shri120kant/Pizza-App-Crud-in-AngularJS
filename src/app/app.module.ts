import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza/pizza-detail/pizza-detail.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { CartComponent } from './cart/cart.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
;

@NgModule({
  declarations: [
    AppComponent,
    PizzaListComponent,
    PizzaDetailComponent,
    PizzaDeleteComponent,
    CartComponent,
    AdminListComponent,
    AdminAddComponent,
    AdminDeleteComponent,
    AdminEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
