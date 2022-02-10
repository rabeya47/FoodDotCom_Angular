import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/adminlayout/admin/dashboard/dashboard.component';

import { AdminlayoutComponent } from './components/adminlayout/adminlayout.component';



import { ChartComponent } from './components/adminlayout/admin/chart/chart.component';
import { ProductTableComponent } from './components/adminlayout/admin/product-table/product-table.component';
import { CalenderComponent } from './components/adminlayout/admin/calender/calender.component';
import { GmailComponent } from './components/adminlayout/admin/gmail/gmail.component';

import { ProductComponent } from './components/adminlayout/admin/product/product.component';
import { PagesComponent } from './components/adminlayout/admin/pages/pages.component';
import { LoginComponent } from './components/adminlayout/login/login.component';
import { UserlayoutComponent } from './components/userlayout/userlayout.component';
import { ExtraComponent } from './components/adminlayout/admin/extra/extra.component';
import { UserdashboardComponent } from './components/userlayout/userdashboard/userdashboard.component';
import { FastfoodComponent } from './components/userlayout/fastfood/fastfood.component';
import { GroceriesComponent } from './components/userlayout/groceries/groceries.component';
import { OderstatusComponent } from './components/userlayout/oderstatus/oderstatus.component';
import { OrdertableComponent } from './components/userlayout/ordertable/ordertable.component';
import { AuthGuard } from './components/guards/auth.guard';
import { OrderformComponent } from './components/userlayout/orderform/orderform.component';
import { SignupComponent } from './components/adminlayout/signup/signup.component';
import { OrderlistComponent } from './components/adminlayout/admin/orderlist/orderlist.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'signup', component:SignupComponent},
   {path:'orderform/:id', component:OrderformComponent},

    {path:'admin', component:AdminlayoutComponent, canActivateChild:[AuthGuard], children:[
    {path:'', component:DashboardComponent},
    {path:'product', component:ProductComponent},
    {path:'chart', component:ChartComponent},
    {path:'producttable', component:ProductTableComponent},
    {path:'calendar', component:CalenderComponent},
    {path:'gmail', component:GmailComponent},
    {path:'pages', component:PagesComponent},
    {path:'extra', component:ExtraComponent},
    {path:'orderlist', component:OrderlistComponent}

  ] },
      {path:'user', component:UserlayoutComponent, children:[
        {path:'', component:UserdashboardComponent},
        {path:'fastfood', component:FastfoodComponent},
        {path:'groceries', component:GroceriesComponent},
        {path:'oderstatus', component:OderstatusComponent},
        {path:'ordertable', component:OrdertableComponent},
        // {path:'orderform', component:OrderformComponent}
      ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
