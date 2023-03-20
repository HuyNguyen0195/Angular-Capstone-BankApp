import { KeyValue } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { answerUrl, questionUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Answer } from '../Models/Answer';
import { Question } from '../Models/Question';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit{
  constructor(private route:ActivatedRoute, 
    private router:Router, 
    private service:GetService
    ){}
  ngOnInit(): void {
    this.question.id=this.route.snapshot.params['id'];
    this.getQuestion()
    this.getAnswers()
  }
  question:Question={}
  data:any;
  getQuestion(){
    this.service.get(questionUrl+'/getquestionbyid/'+this.question.id)
    .subscribe(res=>{
      this.question=res
      this.data=this.question
    })
  }
  answers!:any
  getAnswers(){
    this.service.get(answerUrl+'/getAnswersByQuestionId/'+this.question.id)
    .subscribe(res=>{
      this.answers=res
      console.log(res)
    })
  }
  orderOriginal = (
    a: KeyValue<number,string>, 
    b: KeyValue<number,string>
    ): number => {
    return 0
  }
 
 
}
