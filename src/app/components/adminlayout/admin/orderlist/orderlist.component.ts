import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { cart } from './cart.model';
import { Ordertable } from './orderlist.model';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  //order: Ordertable = new Ordertable();
  cart:  cart = new cart();

  cancel: boolean = false;
  delivery: boolean = false;

  constructor(private http:HttpClient, private router:Router) { }

//Orders:any;
carts : any;
total=0;    
value:any;


  ngOnInit(): void {
     this.show();
  }


  


 show() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8081/cart/getAll', { headers })
      .subscribe(map => {

        this.carts = map.data;
        this.findsum(this.carts)
      })
  }


  cancelOrder(order:any) {
    this.cancel = true;
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8081/order/cancel/"+order.id,{headers:headers})
      .subscribe(data => {
        this.show();
      }
      )
  }
  

  delivered(order:any) {
    this.delivery = true;
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8081/order/delivered/"+order.id,{headers:headers})
      .subscribe(data => {
        this.show();
      }
      )
  }

  
  findsum(data: string | any[]){    
    debugger  
    this.value=data    
    console.log(this.value); 
     
    for(let j=0;j<data.length;j++){ 
      
         this.total+= this.value[j].price  
         console.log(this.total)  
    } 
    console.log(this.total)  
  }

}
