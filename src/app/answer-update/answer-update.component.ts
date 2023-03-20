import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { answerUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Answer } from '../Models/Answer';

@Component({
  selector: 'app-answer-update',
  templateUrl: './answer-update.component.html',
  styleUrls: ['./answer-update.component.css']
})
export class AnswerUpdateComponent implements OnInit{
  constructor(
    private route:ActivatedRoute,
    private service:GetService,
    private router:Router
  ){}
  ngOnInit(): void {
    this.answer.id=this.route.snapshot.params['id']
    this.getData()
  }  
  data:any;
  answer:Answer={};
  getData(){
    this.service.get(answerUrl+'/getbyid/'+this.answer.id)
    .subscribe(res=>{
      this.data=res;
      this.answer=this.data;
    })
  }
  update(){
    this.service.put(answerUrl+'/update',this.answer)
    .subscribe(res=>{
      console.log(res)
      this.router.navigate(['answer'])
    })
  }

}
