import { Component, OnInit} from '@angular/core';
import { ChatService } from 'src/app/chat.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public href: string = "";

  constructor(public chat: ChatService, private router: Router,location: Location) { 
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.href = location.path();
      } else {
        this.href = 'Home'
      }
    });
  }
}
