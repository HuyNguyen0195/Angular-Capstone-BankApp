import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { answerUrl, userUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Answer } from '../Models/Answer';
import { Roles } from '../Models/Shared';
import { User } from '../Models/User';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent {
  constructor(
    private route:ActivatedRoute,
    private service:GetService,
    private router:Router,
    public auth:AuthService
  ){}
  ngOnInit(): void {
    this.user.id=this.route.snapshot.params['id']
    this.getData()
  }  
  roles=Roles
  user:User={};
  getData(){
    this.service.get(userUrl+'/getbyid/'+this.user.id)
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
