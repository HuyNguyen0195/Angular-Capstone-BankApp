import { animate } from '@angular/animations';
import { HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { AppModule } from './app.module';
import { User } from './Models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor() { }
  
  private isAuthorized:boolean=false
  private token:string=''
  private user:User={};
  
  setToken(t:string){
    localStorage.setItem('token',t)
    console.log(localStorage)
  }
  getToken(){
    return localStorage.getItem('token')
  }
  getHeader(){
    return new HttpHeaders ({
      'Authorization':`Bearer ${localStorage.getItem('token')}`
    })
  }
  setUser(u:User){
   
     localStorage.setItem('user',JSON.stringify(u))
  }
  getUser(){
    let u:any=localStorage.getItem('user')
    let user:User=JSON.parse(u)
    return user
  }
  setAuth(auth:boolean){
    localStorage.setItem('isAuth',JSON.stringify(auth))
  }
  getAuth(){
    let a:any=localStorage.getItem('isAuth')
    let isAuth=JSON.parse(a)
    return isAuth;
  }
  logout(){
    this.isAuthorized=false
    this.token=''
    this.user={};
    localStorage.clear()
  }

}
