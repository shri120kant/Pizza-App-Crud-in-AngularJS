import { Component, OnInit, Input } from '@angular/core';
import { Pizza } from '../pizza';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css']
})
export class PizzaDetailComponent implements OnInit {
  @Input()
  pizza:Pizza;
  pageTitle = 'Pizza Details';

  constructor(private route:ActivatedRoute,private service:PizzaService) { }

  ngOnInit() {
    let pizzaId=+this.route.snapshot.paramMap.get("pizzaId");
    console.log("my"+pizzaId);
    this.getPizza(pizzaId);
    console.log("my1"+pizzaId);
  }
  getPizza(pizzaId:any){    
    console.log("getPizza"+pizzaId);
    this.service.getPizza(pizzaId).subscribe((res) => this.pizza=res[0],
    (err) => console.log(err),
    () => console.log('done!'));
   
   
  }
  addToCart(pizza) {
    window.alert('Your pizza has been added to the cart!');
    this.service.addToCart(pizza);
    console.log("DONE");
  }
  

}
