import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  socket: any;
  server: "http://localhost:1500"

  constructor() { 
    
    this.socket = io(this.server)

  }

  listen(eventName: String){
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data) =>{
        Subscriber.next(data)
      });
    });
  }

  emit(eventName: String, data: any){
    this.socket.emit(eventName, data);
  }
}
