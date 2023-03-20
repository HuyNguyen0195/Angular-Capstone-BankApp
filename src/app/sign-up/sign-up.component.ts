import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { userUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  constructor(
    private service:GetService,
    private router:Router
    ){}
  user:User={}
  cPassword:any=''
  signUp(){
      this.service.postSignUp(userUrl+'/add',this.user)
      .subscribe(res=>{
        if(res == 'username'){
          alert('Duplicate User Name')
        }else if(res=='email'){
          alert('duplicate email')
        }
        else if(res== 'success'){
          alert('add successfully')
          this.router.navigate(['/login'])
        }
      })
  }
  demo:User={userName:'k',password:'k'}
  token:any
  
 
}
