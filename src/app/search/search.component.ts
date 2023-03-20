import { Component } from '@angular/core';
import {  questionUrl } from '../baseUrl';

import { GetService } from '../get.service';
import { Topics } from '../Models/Shared';
import { Question } from '../Models/Question';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:GetService){}
  search:Question={}
  topics=Topics
  questions:Question[]=[]
  topicClick(topic:string){
    this.service.get(questionUrl+
      `/getquestionbytopic/${topic}`)
      .subscribe(res=>{
        console.log(res)
        if(res){
          let data:any=res
          this.questions=data
        }else{
          alert('not founded')
        }
      },err=>console.log(err))
  }
  titleClick(title:string){
    
    this.service.get(questionUrl+'/getbytitle/'+title)
    .subscribe(res=>{
      console.log(res)
      let data:any=res
      this.questions=data
    })
  }
}
