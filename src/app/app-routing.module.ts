import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaListComponent } from './pizza/pizza-list/pizza-list.component';
import { PizzaDetailComponent } from './pizza/pizza-detail/pizza-detail.component';
import { CartComponent } from './cart/cart.component';
import { PizzaDeleteComponent } from './pizza/pizza-delete/pizza-delete.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { AdminDeleteComponent } from './admin/admin-delete/admin-delete.component';
import { AdminAddComponent } from './admin/admin-add/admin-add.component';
import { AdminEditComponent } from './admin/admin-edit/admin-edit.component';

const routes: Routes = [
  {path:'pizzas',component:PizzaListComponent},
  {path:'pizza/:pizzaId',component:PizzaDetailComponent},
  { path: 'cart', component: CartComponent },
  {path: 'cart/delete', component: PizzaDeleteComponent},
  {path: 'admin/delete/:pizzaId', component: AdminDeleteComponent},
  {path:'admin/pizzas',component:AdminListComponent},
  {path:'admin/addPizza',component:AdminAddComponent},
  {path:'admin/edit/:pizzaId',component:AdminEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
