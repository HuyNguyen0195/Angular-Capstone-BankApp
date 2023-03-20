import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';
import { chatUrl, userUrl } from '../baseUrl';
import { GetService } from '../get.service';
import { Chat } from '../Models/Chat';
import { User } from '../Models/User';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{
  constructor(
    private service:GetService,
    private auth:AuthService
    ){}
  ngOnInit(): void {
    this.getUsers()
  }
  users:User[]=[]
  currentUser=this.auth.getUser()

  getUsers(){
    this.service.get(userUrl+'/getallusers')
    .subscribe(res=>{
      let datas:any=res;
      this.users=datas
    })
  }
  chatBoxToggle:boolean=false
  toUser:string=''
  chatClick(userName:any){
    this.toUser=userName
    this.chatBoxToggle=true
  }
}
