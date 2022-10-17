import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminProductRetrieveComponent } from './admin-product-retrieve/admin-product-retrieve.component';
import { EmployeedashboardComponent } from './employeedashboard/employeedashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginaComponent } from './logina/logina.component';
import { SignupbComponent } from './signupb/signupb.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserdashboardComponent,
    AdmindashboardComponent,
    AddProductComponent,
    AdminProductRetrieveComponent,
    EmployeedashboardComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    LoginaComponent,
    SignupbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
