import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(
    private authService:AuthService,
  ){}
  ngOnInit(): void {
    let a:any=localStorage.getItem('isAuth')
    let isA = JSON.parse(a)
    console.log(isA)
    return isA
  }
  get isAuth(){
    let a:any=localStorage.getItem('isAuth')
    let isA = JSON.parse(a)
    console.log(isA)
    return isA
    return this.authService.getAuth()
  }
  get isUser(){
    return this.authService.getUser()
  }
  logout(){
    this.authService.logout()
  }
}
