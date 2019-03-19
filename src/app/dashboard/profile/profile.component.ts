import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/services/messaging.service';
// import { MessagingService } from "../../services/";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  message;

  constructor(private messagingService: MessagingService) { }

  ngOnInit() {
    const userId = 'user001';
    this.messagingService.requestPermission(userId)
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage;
    console.log();
    
  }
}


