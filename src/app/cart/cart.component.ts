import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../pizza/pizza.service';
import { Pizza } from '../pizza/pizza';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  pageTitle = 'Your Cart';
  pizzas:Pizza[]=[];
  constructor(private cartService: PizzaService) { 
    
  }

  ngOnInit() {
    this.cartService.getCartPizzas().subscribe(orderPizzas=>this.pizzas=orderPizzas);
    console.log("Done11");
  }
  buy() {
    alert("Your order will be delivered to you within 30 minutes!                           Have a Great Day");
  }
  

}
