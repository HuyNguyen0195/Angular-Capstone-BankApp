import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { answerUrl } from '../baseUrl';

import { GetService } from '../get.service';
import { Answer } from '../Models/Answer';

@Component({
  selector: 'app-pending-answer',
  templateUrl: './pending-answer.component.html',
  styleUrls: ['./pending-answer.component.css']
})
export class PendingAnswerComponent implements OnInit{
  constructor(
    private service:GetService,
    private authService:AuthService,
    ){}
  ngOnInit(): void {
    this.getDatas()
    
  }
  answers:Answer[]=[]
  datas!:any;
  
  getKeys(obj:any){
    return Object.keys(obj);
  }
  getDatas(){
    this.service.get(answerUrl+'/getpendinganswer')
    .subscribe(res=>{
      this.datas=res;
      this.answers=this.datas
      console.log(res)
    })
  }
  remove(id:any){
    for(let answer of this.answers){
      if(answer.id==id){
        answer.status='false'
        answer.approved_by=this.authService.getUser().userName;
        this.service.put(answerUrl+'/update',answer)
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
        data.approved_by=this.authService.getUser().userName;
        this.service.put(answerUrl+'/update',data)
        .subscribe(res=>{
          console.log(res)
          this.getDatas()
        },err=>console.log(err))
      }
      
    }
  }

  
}
