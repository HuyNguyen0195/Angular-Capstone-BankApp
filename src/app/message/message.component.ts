import { Component, OnInit } from '@angular/core';
import { chatUrl, userUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Chat } from '../Models/Chat';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  constructor(
    private service:GetService,
  ){}
    ngOnInit(): void {
      this.getDatas()
    }
  datas!:any;
  getDatas(){
    this.service.get(chatUrl)
    .subscribe(res=>{
      console.log(res)
      this.datas=res
    })
  }
  delete(id:number){
    this.service.delete(chatUrl+'/deletechatbyid/'+id)
    .subscribe(res=>{
      console.log(res)
      alert(res)
      this.getDatas()
    })
  }
}
