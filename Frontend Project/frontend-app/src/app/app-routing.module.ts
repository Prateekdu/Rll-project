import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductRetrieveComponent } from './admin-product-retrieve/admin-product-retrieve.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginaComponent } from './logina/logina.component';
import { SignupComponent } from './signup/signup.component';
import { SignupbComponent } from './signupb/signupb.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"logina",component:LoginaComponent},
  {path:"adminHome",component:AdmindashboardComponent,children:[
    {path:"addProduct",component:AddProductComponent},
    {path:"findAllProduct",component:AdminProductRetrieveComponent}
  ]},
  
  {path:"userHome",component:UserdashboardComponent},
  {path:"employeeHome",component:EmployeedashboardComponent},
  {path:"home",component:HomeComponent},
  {path:"footer",component:FooterComponent},
  {path:"signUp",component:SignupComponent},
  {path:"signupb",component:SignupbComponent},
  {path:"header",component:HeaderComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
