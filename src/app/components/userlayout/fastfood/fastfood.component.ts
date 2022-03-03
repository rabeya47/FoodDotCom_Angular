import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './fastfood.model';

@Component({
  selector: 'app-fastfood',
  templateUrl: './fastfood.component.html',
  styleUrls: ['./fastfood.component.css']
})
export class FastfoodComponent implements OnInit {
  product: Product = new Product();
  products: any;

  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.show();
  }


  //for show data
show(){
  const headers = { 'content-type': 'application/json' };
  this.http.get<any>('http://localhost:8081/product/category/2', { headers })
    .subscribe(map => {

      this.products = map.data;

    })
  }



  editProduct(product: any) {  
    
    this.product.id = product.id
    this.product.productName = product.productName
    this.product.quantity = product.quantity
    this.product.price = product.price
    this.product.remarks = product.remarks
    this.product.images = product.images
    this.product.categoryId = product.categoryId
   

    this.router.navigate(['orderform'], { state: { sendproduct: product, isSave: false } })
}





}
