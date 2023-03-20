import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';
import { URL } from './baseUrl';
import { Chat } from './Models/Chat';
declare var SockJS:any;
declare var Stomp:any;

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(
    private auth:AuthService
  ) {
    this.initializeWebSocketConnection();
  }
  public stompClient:any;
  public msg:Chat[] = [];
  initializeWebSocketConnection() {
    const serverUrl = URL+'socket';
    console.log(serverUrl);
    const ws = new SockJS(serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    // tslint:disable-next-line:only-arrow-functions
    this.stompClient.connect({}, function() {
      that.stompClient.subscribe('/message', (message:any) => {
        if (message.body) {

          let c:Chat=JSON.parse(message.body)
          console.log(message)
          that.msg.push(c);
        }
      });
    });
  }

  sendMessage(message:any) {
    this.stompClient.send('/app/send/message' , {}, message);
  }
}
