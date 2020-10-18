import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  userChat = {
    user: '',
    text: '',
  };

  messages;
  eventName = 'send-message';

  constructor(
    private activated: ActivatedRoute,
    private webService: WebSocketService
  ) {}

  ngOnInit(): void {
    const id = this.activated.snapshot.params.id;
    this.userChat.user = id;

    this.webService.listen('text-event').subscribe((data) => {
      this.messages = data;
    });
  }

  chatMessage() {
    this.webService.emit(this.eventName, this.userChat);
    this.userChat.text = '';
  }
}
