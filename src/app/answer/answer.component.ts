import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { answerUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Answer } from '../Models/Answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit{
  constructor(
    private service:GetService,
    private router:Router
    ){}
  ngOnInit(): void {
    this.getDatas()

  }
  datas!:any;
  answers:Answer[]=[];
  getDatas(){
    this.service.get(answerUrl)
    .subscribe(res=>{
      this.datas=res
      this.answers=this.datas
     })
  }
  update(id:any){
    this.router.navigate(['answerUpdate',id])
  }
  delete(id:any){
    this.service.delete(answerUrl+'/deletebyid/'+id)
    .subscribe(res=>{
      alert(res)
      this.getDatas()
    })
  }
}
