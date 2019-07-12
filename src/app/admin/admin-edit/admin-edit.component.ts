import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from 'src/app/pizza/pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza/pizza.service';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent implements OnInit {
  @Input()
  pizza:Pizza;
  constructor(private route:ActivatedRoute,private service:PizzaService) { }

  ngOnInit() {

  }


  editadminPizza(pizzaId:any,price:any){
    console.log("Entered");
    this.service.editadminPizza(pizzaId,price);
  }
}
