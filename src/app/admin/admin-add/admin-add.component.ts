import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'src/app/pizza/pizza.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  angForm:FormGroup
  constructor(private route:ActivatedRoute,private service:PizzaService,private fb: FormBuilder) {
  this.createForm();
}
  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      pizzaId:['',Validators.required],
      pizzaName:['',Validators.required],
      price:['',Validators.required],
      description:['',Validators.required],
      pizzaVegNonveg:['',Validators.required]
    });
  }

  addadminPizza(pizzaId,pizzaName,price,description,pizzaVegNonveg){
  this.service.addadminPizza(pizzaId,pizzaName,price,description,pizzaVegNonveg);
  
  }
  

}
