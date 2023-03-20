import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { User } from '../Models/User';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit{
  constructor(
    private service:GetService,
    private router:Router,
  ){}
  ngOnInit(): void {
    this.getDatas()
  }
  datas:any;
  users:User[]=[]
  getDatas(){
    this.service.get(userUrl+'/getallusers')
    .subscribe(res=>{
      this.datas=res
      this.users=this.datas
      console.log(res)
    })
  }
  delete(id:any){
    this.service.delete(userUrl+'/delete/'+id)
    .subscribe(res=>{console.log(res)
      alert(res)
      this.getDatas();
    })
  }
  update(id:any){
    this.router.navigate(['/userUpdate',id])
  }
}
