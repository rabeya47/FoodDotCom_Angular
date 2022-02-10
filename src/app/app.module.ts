import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';
import { AdminheaderComponent } from './components/adminlayout/adminheader/adminheader.component';
import { AdminfooterComponent } from './components/adminlayout/adminfooter/adminfooter.component';
import { DashboardComponent } from './components/adminlayout/admin/dashboard/dashboard.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ChartComponent } from './components/adminlayout/admin/chart/chart.component';
import { ProductTableComponent } from './components/adminlayout/admin/product-table/product-table.component';
import { CalenderComponent } from './components/adminlayout/admin/calender/calender.component';
import { GmailComponent } from './components/adminlayout/admin/gmail/gmail.component';

import { ProductComponent } from './components/adminlayout/admin/product/product.component';
import { PagesComponent } from './components/adminlayout/admin/pages/pages.component';
import { LoginComponent } from './components/adminlayout/login/login.component';
import { UserlayoutComponent } from './components/userlayout/userlayout.component';
import { UserheaderComponent } from './components/userlayout/userheader/userheader.component';
import { UserfooterComponent } from './components/userlayout/userfooter/userfooter.component';
import { ExtraComponent } from './components/adminlayout/admin/extra/extra.component';
import { UserdashboardComponent } from './components/userlayout/userdashboard/userdashboard.component';
import { FastfoodComponent } from './components/userlayout/fastfood/fastfood.component';
import { GroceriesComponent } from './components/userlayout/groceries/groceries.component';
import { OderstatusComponent } from './components/userlayout/oderstatus/oderstatus.component';
import { OrdertableComponent } from './components/userlayout/ordertable/ordertable.component';
import { OrderformComponent } from './components/userlayout/orderform/orderform.component';
import { OrderlistComponent } from './components/adminlayout/admin/orderlist/orderlist.component';







@NgModule({
  declarations: [
    AppComponent,
    AdminlayoutComponent,
    AdminheaderComponent,
    AdminfooterComponent,
    DashboardComponent,
    
    ChartComponent,
    ProductTableComponent,
    CalenderComponent,
    GmailComponent,
   
    ProductComponent,
    PagesComponent,
    LoginComponent,
    UserlayoutComponent,
    UserheaderComponent,
    UserfooterComponent,
    ExtraComponent,
    UserdashboardComponent,
    FastfoodComponent,
    GroceriesComponent,
    OderstatusComponent,
    OrdertableComponent,
    OrderformComponent,
    OrderlistComponent,
  
 


  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
