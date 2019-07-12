import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza/pizza.service';

@Component({
  selector: 'app-admin-delete',
  templateUrl: './admin-delete.component.html',
  styleUrls: ['./admin-delete.component.css']
})
export class AdminDeleteComponent implements OnInit {

  constructor(private route:ActivatedRoute,private Service:PizzaService) { }

  ngOnInit() {
    let pizzaId=this.route.snapshot.paramMap.get("pizzaId");
   this.deletePizza(pizzaId);
  }
  deletePizza(pizzaId){
    this.Service.deletePizza(pizzaId);
}
}
