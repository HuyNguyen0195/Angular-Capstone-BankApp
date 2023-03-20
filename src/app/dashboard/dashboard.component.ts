import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
 constructor(
  private auth:AuthService
 ){}
 ngOnInit(): void {
  let u:any=localStorage.getItem('user')
  let user:User=JSON.parse(u)
  this.isAdmin=user.userType
 }
  isAdmin:any;
}
