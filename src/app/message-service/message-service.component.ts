import { Component } from '@angular/core';
import { AuthService } from '../auth-service.service';
import { MessageService } from '../message.service';
import { Chat } from '../Models/Chat';

@Component({
  selector: 'app-message-service',
  templateUrl: './message-service.component.html',
  styleUrls: ['./message-service.component.css']
})
export class MessageServiceComponent {
  title = 'websocket-frontend';
  chat:Chat={datetime:new Date().toString()};
  constructor(
    public messageService: MessageService,
    public auth:AuthService
    ) {}
    messages:string[]=[]
  huyClick(){
    this.chat.from_user='huy'
    this.chat.to_user='john'
  }
  johnClick(){
    this.chat.from_user='john'
    this.chat.to_user='huy'
  }
   
  sendMessage() {
    if (this.chat.message) {
      let c=JSON.stringify(this.chat)
      this.messageService.sendMessage(c);
      this.chat.message = '';
    }
  }
}
