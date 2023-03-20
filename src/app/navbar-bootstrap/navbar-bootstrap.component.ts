import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-navbar-bootstrap',
  templateUrl: './navbar-bootstrap.component.html',
  styleUrls: ['./navbar-bootstrap.component.css']
})
export class NavbarBootstrapComponent {
  constructor(
    private authService:AuthService,
  ){}
  get isAuth(){
    return this.authService.getAuth()
  }
  get isUser(){
   return this.authService.getUser()
  }
  logout(){
    this.authService.logout()
  }
}
