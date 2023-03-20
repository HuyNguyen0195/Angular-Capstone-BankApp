import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { answerUrl, questionUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Answer } from '../Models/Answer';
import { Question } from '../Models/Question';

@Component({
  selector: 'app-create-answer',
  templateUrl: './create-answer.component.html',
  styleUrls: ['./create-answer.component.css']
})
export class CreateAnswerComponent implements OnInit{
  constructor(
    private service:GetService,
    private router:Router,
    private authService:AuthService,
    ){}
  ngOnInit(): void {
    console.log(this.questionData)
  }
  answer:Answer={}
  @Input()
  questionData!:Question
  
  addAnswer(){
    this.answer.question=this.questionData;
    this.answer.created_by=this.authService.getUser().userName
    this.service.post(answerUrl+'/addanswer',this.answer)
    .subscribe(res=>{console.log(res)
      this.router.navigate(['dashboard']);
    },err=>console.log(err))
  }
}
