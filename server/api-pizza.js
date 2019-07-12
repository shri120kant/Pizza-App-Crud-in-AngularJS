const express = require('express');
const app=express();
const apipizzaRouter=express.Router();

let Pizza = require('./pizza');

apipizzaRouter.route('/pizzas').get((req,resp)=>{
   Pizza.find((err,data)=>{
       if(err){
           resp.send("Failure");
       }
       resp.send(data);
       
   });
});

apipizzaRouter.route('/admin/pizzas').get((req,resp)=>{
    Pizza.find((err,data)=>{
        if(err){
            resp.send("Failure");
        }
        resp.send(data);
        
    });
 });


apipizzaRouter.route('/:pizzaId').get((req,resp)=>{

    let p_pizzaId=req.params.pizzaId;
    Pizza.find({pizzaId:p_pizzaId},(err,data)=>{
        if(err){
            resp.send("Fail to load data for:"+p_pizzaId);
        }
        resp.send(data);
    });
});

apipizzaRouter.route('/admin/delete/:pizzaId').delete((req,resp)=>{
    let p_pizzaId=req.params.pizzaId;
    Pizza.findOneAndDelete({pizzaId:p_pizzaId},(err,data)=>{
        if(err){
            resp.send("Fail to delete data for:"+p_pizzaId);
        }
        resp.send(p_pizzaId+":removed");
    });
});

apipizzaRouter.route('/admin/addPizza').post((req,resp)=>{
    let body_pizza = new Pizza(req.body); 
    resp.send("Pizza Added");
   body_pizza.save().then(
       ()=>resp.send("New Pizza added to database"),
       (err)=>resp.send("Failure while adding Pizza details!")
   );
});

apipizzaRouter.route('/admin/update/:pizzaId/:price').put((req,resp)=>{
    let p_pizzaId=req.params.pizzaId;
    let p_price=req.params.price;
    Pizza.findOneAndUpdate({pizzaId:p_pizzaId},{price:p_price},(err,data)=>{
        if(err)resp.send("Failed to update");
        resp.send("Updated records for "+p_pizzaId);
    });
});



module.exports=apipizzaRouter;