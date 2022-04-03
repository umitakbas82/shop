import { Component, OnInit } from '@angular/core';
import Product from './product';

@Component({
  selector: 'app-product',  
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title="Product List"
  filterText!:"";

  products :Product[]=[
    {id:1,name:"Laptop",price:2500,categoryId:1, description:"Asus Zenbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id:2,name:"Mouse",price:25,categoryId:2, description:"a4tech",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}, 
    {id:1,name:"Laptop",price:2500,categoryId:1, description:"Asus Zenbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id:2,name:"Mouse",price:25,categoryId:2, description:"a4tech",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id:2,name:"Mouse",price:25,categoryId:2, description:"a4tech",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"}, 
    {id:1,name:"Laptop",price:2500,categoryId:1, description:"Asus Zenbook",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},
    {id:2,name:"Mouse",price:25,categoryId:2, description:"a4tech",imageUrl:"https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"},      
  ];

  ngOnInit(): void {
  }

  addToCart(product:Product){
    console.log("Add to cart: "+product.name);
    alert("Product added to cart");
  }
    
  

}
