import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from './user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
user: User = new User();
// form: FormGroup 



constructor(private formBuilder: FormBuilder, private http: HttpClient ,private router:Router) {
  // this.form = formBuilder.group(
  //   {
  //     emali : ['', [Validators.required]],
  //     username: ['', [Validators.required]],
  //     password : ['', [Validators.required]],
  //     confarmPass : ['', [Validators.required]]

  //   }

  // );
 }

  ngOnInit(): void {
    
  }


  // get f(): {
  //   [key: string]: AbstractControl
  // } {
  //   return this.form.controls;
  // }

  

 
  save(){
    
      const headers = { 'content-Type': 'application/json' };
      this.http.post<any>("http://localhost:8081/user/save", JSON.stringify(this.user), { headers: headers })
        .subscribe(data => {
          console.log(data);
          console.log(this.user.username);
         
        })

       
  }

  signup(){
     this.router.navigateByUrl('/admin');
  }

}
