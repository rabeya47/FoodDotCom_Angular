import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './groceries.model';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
  product: Product = new Product();
  products: any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.show();
  }


  //for show data
show(){
  const headers = { 'content-type': 'application/json' };
  this.http.get<any>('http://localhost:8081/product/category/1', { headers })
    .subscribe(map => {

      this.products = map.Data;

    })
  }

}

