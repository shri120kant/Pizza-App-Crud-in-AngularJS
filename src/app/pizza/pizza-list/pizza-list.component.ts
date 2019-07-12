import { Component, OnInit } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  pageTitle = 'Our Pizzas';
  pizzas:Pizza[]=[];
  constructor(private route:ActivatedRoute,private service:PizzaService) { }

  ngOnInit() {
    this.service.getPizzas().subscribe(pizzasList=>this.pizzas=pizzasList);
  }

}
