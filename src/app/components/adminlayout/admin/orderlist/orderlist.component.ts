import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ordertable } from './orderlist.model';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit {
  order: Ordertable = new Ordertable();
  cancel: boolean = false;
  delivery: boolean = false;

  constructor(private http:HttpClient, private router:Router) { }

Orders:any;



  ngOnInit(): void {
     this.show();
  }



 show() {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8081/order/getAll', { headers })
      .subscribe(map => {

        this.Orders = map.Data;

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

}
