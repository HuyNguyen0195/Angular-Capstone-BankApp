import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { userUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  constructor(
    private auth:AuthService,
    private router:Router,
    private service:GetService
    ){}
  ngOnInit(): void {
    this.getData()
  }
  user:User={};
  getData(){
    this.service.get(userUrl+'/getbyid/'+this.auth.getUser().id)
    .subscribe(res=>{
      this.user=res;
    })
  }
  update(){
    this.service.putText(userUrl+'/update',this.user)
    .subscribe(res=>{
      if(res=='username'){
        alert('Duplicate User Name')
      }else if(res=='email'){
        alert('duplicate email')
      }
      else if(res=='success'){
        this.router.navigate(['userManager'])
      }
    })
  }
}
