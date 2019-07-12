import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/pizza/pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza/pizza.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
  pizzas:Pizza[]=[];
  selectedPizza:Pizza;
  constructor(private route:ActivatedRoute,private service:PizzaService) { }

  ngOnInit() {
    this.service.getadminPizzas().subscribe(pizzasList=>this.pizzas=pizzasList);
  }

  onSelection(pizza:Pizza){
    this.selectedPizza=pizza;
  }

}
