import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { questionUrl } from '../baseUrl';
import { GetService } from '../get.service';

@Component({
  selector: 'app-pending-question',
  templateUrl: './pending-question.component.html',
  styleUrls: ['./pending-question.component.css']
})
export class PendingQuestionComponent implements OnInit{
  constructor(
    private service:GetService,
    private authService:AuthService
    ){}
  ngOnInit(): void {
    this.getDatas()
  }
  datas:any;
  url=questionUrl;
  getKeys(obj:any){
    return Object.keys(obj);
  }
  getDatas(){
    this.service.get(this.url+'/getpendingquestions')
    .subscribe(res=>{
      this.datas=res;
      console.log(res)
    })
  }
  remove(id:any){
    for(let data of this.datas){
      if(data.id==id){
        data.status='false'
        this.service.put(this.url+'/update',data)
        .subscribe(res=>{
          console.log(res)
          this.getDatas()
        },err=>console.log(err))
      }
      
    }
  }
  approve(id:any){
    for(let data of this.datas){
      if(data.id==id){
        data.status='approved'
        data.qapproved_by=this.authService.getUser().userName
        this.service.put(this.url+'/update',data)
        .subscribe(res=>{
          console.log(res)
          this.getDatas()
        },err=>console.log(err))
      }
      
    }
  }


}
