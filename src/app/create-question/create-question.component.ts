import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { questionUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Topics } from '../Models/Shared';
import { Question } from '../Models/Question';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {
  constructor(
    private service:GetService,
    private router:Router,
    private authService:AuthService
    ){}
  topics=Topics
  question:Question={}
  createClick(){
    this.question.qcreated_by=this.authService.getUser().userName
    this.service.post(questionUrl+'/addquestion',this.question)
    .subscribe(data=>{console.log(data)
      this.router.navigate(['/question'])
    },err=>console.log(err)
    )
   
  }
  test(){
    console.log(this.question)
  }
}
