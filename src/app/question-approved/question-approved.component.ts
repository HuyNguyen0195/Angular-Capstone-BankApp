import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { questionUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Question } from '../Models/Question';

@Component({
  selector: 'app-question-approved',
  templateUrl: './question-approved.component.html',
  styleUrls: ['./question-approved.component.css']
})
export class QuestionApprovedComponent implements OnInit {
  constructor(
    private service:GetService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.getQuestions()
  }
  datas!:any;
  questions:Question[]=[]
  getQuestions(){
    this.service.get(questionUrl+'/getapprovedquestions')
    .subscribe(res=>{
      this.datas=res
      this.questions=this.datas
    })
  }
  detail(id:any){
    this.router.navigate(['questionDetail',id])
  }
}
