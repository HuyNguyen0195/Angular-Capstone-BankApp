import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { questionUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Question } from '../Models/Question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  url:string=questionUrl;
  datas:any;
  getKeys(obj:any){
    return Object.keys(obj)
  }
  constructor(private service:GetService, private router:Router){}
  ngOnInit(): void {
    this.getDatas();
   
  }
  getDatas(){
    this.service.get(this.url)
    .subscribe(res=>{
      this.datas=res;
      console.log(res)
    })
  }
  delete(id:any){
    this.service.delete(this.url+'/deletequestionbyid/'+id)
    .subscribe(res=>{console.log(res)
      alert(res)
      this.getDatas();
    })
  }
  detail(id:any){
    this.router.navigate(['/questionDetail',id])
  }
}
