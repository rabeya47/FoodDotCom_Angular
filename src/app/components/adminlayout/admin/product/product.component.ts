import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from './product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product = new Product();
  form: FormGroup
  isShowTable : boolean= true; //initially table show true
  isSave: boolean = true;
  success: boolean = false;
  update: boolean = false;
  delete: boolean = false;
  fileToUpload: any;


  
  submitted = false;
    products: any = [];
  
  mode = false;
  currentIndex: number = -1;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = formBuilder.group(
      {
        productName : ['', [Validators.required]],
        quantity: ['', [Validators.required]],
        price : ['', [Validators.required]],
        remarks : ['', ],
        images: ['', [Validators.required]],
        categoryId : ['',[Validators.required]]

      }

    );
   }

  ngOnInit(): void {
    this.loadProductData();
  }

  get f(): {
    [key: string]: AbstractControl
  } {
    return this.form.controls;
  }


  fileChange(files: any) {
    debugger;
    this.fileToUpload = files.files[0]
  }

  
  saveProduct(){
  this.submitted = true;
   this.success = true;

    debugger;
    const formData: FormData = new FormData();
    formData.append('productName', this.product['productName']);
    formData.append('quantity', this.product['quantity'].toString());
    formData.append('price', this.product['price'].toString());
    formData.append('remarks', this.product['remarks']);
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    formData.append('categoryId', this.product['categoryId'].toString());

   
      //  const headers = { 'content-Type': 'application/json' };
      // this.http.post<any>("http://localhost:8081/saveproduct_withfile", JSON.stringify(this.product), { headers: headers })
      //   .subscribe(data => {
      //     console.log(data);
      //     console.log(this.product.productName);
      //   })


      this.http.post("http://localhost:8081/saveproduct_withfile", formData)
      .subscribe(res => {
        console.log(res);
       
       
      }, err => {
        console.log("error");
        
      })

    

  }


  toggleProductList() {
    console.log("Heloooooo");
    this.isShowTable = !this.isShowTable;
    console.log(this.isShowTable);
  }



  
  loadProductData() {
    this.isShowTable = true ;
    const headers = { 'content-type': 'application/json' };
    this.http.get<any>('http://localhost:8081/product/getAll', { headers })
      .subscribe(map => {

        this.products = map.data;
        console.log(this.products);
      
      
      })
  }


  updateProduct() {
    this.update = true;
    this.isSave = true;

    const formData: FormData = new FormData();
    formData.append('id', this.product['id'].toString());

    formData.append('productName', this.product['productName']);
    formData.append('quantity', this.product['quantity'].toString());
    formData.append('price', this.product['price'].toString());
    formData.append('remarks', this.product['remarks']);
    formData.append('file', this.fileToUpload, this.fileToUpload?.name);
    formData.append('categoryId', this.product['categoryId'].toString());

    this.http.post("http://localhost:8081/product/update", formData)
    .subscribe(res => {
      console.log(res);
      
    }, err => {
      console.log("error");
    })





    // const h = {'content-Type':'application/json'}
    // this.http.post<any>("http://localhost:8081/product/update",JSON.stringify(this.product),{"headers":h})
    // .subscribe(data =>{
    //  this.product = new Product();
    //   console.log(data);
    //   console.log("rabu");
    //   this.loadProductData();
    // })
  }

  

  editProduct(product: any) {  
    
      this.product.id = product.id
      this.product.productName = product.productName
      this.product.quantity = product.quantity
      this.product.price = product.price
      this.product.remarks = product.remarks
      this.product.images = product.images
      this.product.categoryId = product.categoryId
      this.isSave = false;
  }




  
  deleteProduct(product: any) {
    const headers = { 'content-type': 'application/json' };
    this.http.get("http://localhost:8081/product/delete/" + product.id, { headers: headers })
      .subscribe(data => {
        this.loadProductData();
      }
      )
  }
}

