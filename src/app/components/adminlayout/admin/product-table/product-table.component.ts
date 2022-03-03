import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit {

  constructor(private http:HttpClient) { }

  Products:any;
  
  ngOnInit(): void {
    this.show();
  }


  
//for show data
show(){
  const headers = { 'content-type': 'application/json' };
  this.http.get<any>('http://localhost:8081/product/getAll', { headers })
    .subscribe(map => {

      this.Products = map.data;
      console.log(this.Products);
    })
  }

}
