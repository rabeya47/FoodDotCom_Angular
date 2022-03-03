import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordertable } from './ordertable.model';

@Component({
  selector: 'app-ordertable',
  templateUrl: './ordertable.component.html',
  styleUrls: ['./ordertable.component.css']
})
export class OrdertableComponent implements OnInit {
  order: Ordertable = new Ordertable();
 

  constructor(private http:HttpClient, private router:Router) { }

Orders:any;



  ngOnInit(): void {
     this.show();
  }



 show() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8081/order/getAll', { headers })
      .subscribe(map => {

        this.Orders = map.data;

      })
  }



  cancelOrder(order:any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8081/order/cancel/"+order.id,{headers:headers})
      .subscribe(data => {
        this.show();
      }
      )
  }
  

  delivered(order:any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8081/order/delivered/"+order.id,{headers:headers})
      .subscribe(data => {
        this.show();
      }
      )
  }

}
