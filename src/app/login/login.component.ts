import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { userUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { User } from '../Models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(
    private service:GetService,
    private router:Router,
    private auth:AuthService
    ){}
 ngOnInit(): void {
  
   this.checkLocalStorage()
 }
  user:User={}
  checkLocalStorage(){
   if(this.auth.getAuth() == true){
    this.router.navigate(['dashboard'])
   }
    
  }

  loginToken(){
    this.service.generateToken(this.user)
      .subscribe(res=>{
        console.log(res)
        let t:any=res
        this.auth.setToken(t)
        this.getUserByName(this.user.userName)
      },err=>console.log(err))
      
  }
  getUserByName(name:any){
    this.service.get(userUrl+'/getbyusername/'+name)
    .subscribe(res=>{
      this.auth.setAuth(true)
      this.auth.setUser(res)
      this.router.navigate(['dashboard'])
    })
  }
  signUp(){
    this.router.navigate(['signUp'])
  }

}
