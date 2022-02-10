import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
// import { Router } from '@angular/router';
import { Order } from './orderform.model';

@Component({
  selector: 'app-orderform',
  templateUrl: './orderform.component.html',
  styleUrls: ['./orderform.component.css']
})
export class OrderformComponent implements OnInit {
  order: Order = new Order();
  success: boolean = false;
  productId: any
  form: FormGroup


  isSave: boolean = true;


  mode = false;
  currentIndex: number = -1;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private activatedRout: ActivatedRoute) {
    this.form = formBuilder.group(
      {
        customerName: [Validators.required],
        address: [Validators.required],
        productName: ['', [Validators.required]],
        price: ['', [Validators.required]],
        quantity: ['', [Validators.required], [Validators.max(3), Validators.min(0)]],



      }

    );
  }





  ngOnInit(): void {

    this.productId = this.activatedRout.snapshot.paramMap.get("id");
     this.getOneProduct(this.productId);

  }



  //for save order
  save() {
    this.success = true;
    const h = { 'content-Type': 'application/json' }
    this.http.post<any>("http://localhost:8081/order/save", JSON.stringify(this.order), { "headers": h })
      .subscribe(data => {
        this.order = new Order();
        console.log(data);
        console.log("rabu");
      })


  }



  getOneProduct(id:string) {
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8081/product/findById/'+id, { headers })
      .subscribe(map => {
      console.log(map);

        this.order = map.Data;
        this.order.quantity = 0

      })
  }



}