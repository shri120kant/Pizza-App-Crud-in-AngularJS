import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Pizza } from './pizza';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  pizzas:Pizza[]=[];
  uri = 'http://localhost:4000/pizza';
  constructor(private httpClient:HttpClient) {
   }

   
   public getPizzas():Observable<Pizza[]>{
     return this.httpClient.get<Pizza[]>(`${this.uri}`+'/pizzas');
   }


   public getadminPizzas():Observable<Pizza[]>{
    return this.httpClient.get<Pizza[]>(`${this.uri}`+'/admin/pizzas');
  }
   

  public getPizza(pizzaId:number):any{
   
    return this.httpClient.get<Pizza>(`${this.uri}`+'/'+`${pizzaId}`);
  }

  public deletePizza(pizzaId:number){
     return this.httpClient.delete(`${this.uri}`+'/admin/delete/'+`${pizzaId}`)
          .subscribe(res => console.log('Done'));
    }

    public addToCart(pizza){
      this.pizzas.push(pizza);
    }

    addadminPizza(pizzaId,pizzaName,price,description,pizzaVegNonveg){
      let pizza={
        pizzaId:pizzaId,
        pizzaName:pizzaName,
        price:price,
        description:description,
        pizzaVegNonveg:pizzaVegNonveg
      };
      return this.httpClient.post(`${this.uri}`+'/admin/addPizza',pizza)
      .subscribe(res=>console.log("New Pizza Registered Successfully"));
    }

    editadminPizza(pizzaId,price) {
      console.log("Entered1");
      return this.httpClient.put(`${this.uri}`+'/admin/update/'+pizzaId+'/'+price,{})
      .subscribe(res => console.log('Done'));
      }

    getCartPizzas():Observable<Pizza[]> {
      console.log("Done1111");
      return of (this.pizzas);
      
    }

    deleteFromCart(pizzaId){
      this.pizzas.pop();
    }
    
  
    
}
