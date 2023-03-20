import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { chatUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Chat } from '../Models/Chat';

import { MessageService } from '../message.service';
@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnChanges{

  constructor(
    private service:GetService,
    private router:Router,
    private auth:AuthService,
    public messageService:MessageService,

    ){}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    this.chat.to_user=this.toUser
    this.title='Chat With: '+this.toUser
    this.getDatas()
  }
  @Input() toUser!:string;
  title:string=''
  messages:Chat[]=[]
  chat:Chat={from_user:this.auth.getUser().userName}
  getDatas(){
    this.service.post(chatUrl+'/getbytoandfrom_user',this.chat)
    .subscribe(res=>{
      console.log(res)
      let m:any=res
      this.messages=m
    })
  }
  send(){
    this.service.post(chatUrl,this.chat)
    .subscribe(res=>{
      console.log(res)
      this.router.navigate(['chat'])
    })
  }

  sendMessage() {
    if (this.chat.message) {
      let c=JSON.stringify(this.chat)
      this.messageService.sendMessage(c);
      this.chat.message = '';
    }
  }
}
