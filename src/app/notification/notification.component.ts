import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import { PushNotificationService } from './push-notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  data: Array <any> = [];


  constructor( private _notificationService: PushNotificationService) { 
    this._notificationService.requestPermission();
    console.log(this._notificationService,'asa');
  }

  ngOnInit() {
  }

  notify() {
    this.data.push({
      'title': 'Approval',
      'alertContent': 'This is First Alert -- By Debasis Saha'
    });
    this.data.push({
      'title': 'Request',
      'alertContent': 'This is Second Alert -- By Debasis Saha'
    });
    this.data.push({
      'title': 'Leave Application',
      'alertContent': 'This is Third Alert -- By Debasis Saha'
    });
    this.data.push({
      'title': 'Approval',
      'alertContent': 'This is Fourth Alert -- By Debasis Saha'
    });
    this.data.push({
      'title': 'To Do Task',
      'alertContent': 'This is Fifth Alert -- By Debasis Saha'
    });
    this._notificationService.generateNotification(this.data);
    console.log(this.data,'data');
  }

}
