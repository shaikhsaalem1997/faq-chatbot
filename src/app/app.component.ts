import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, } from '@angular/core';
import { ChatService, Message } from 'src/app/chat.service';
import { Observable } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  messages!: Observable<Message[]>;
  formValue!: string;
  sessionVal!: string;
  countVal = 0;
  public href: string = "";
  public chatbot_name: string = "";
  title: any;

  constructor(public chat: ChatService, private router: Router, location: Location) { 
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.href = location.path();
      } else {
        this.href = 'Home'
      }
    });
  }

  ngOnInit(): void {

    this.scrollToBottom();

    this.messages = this.chat.conversation.asObservable()
    .pipe(scan((acc, val: any) => acc.concat(val)));
}

changeName() {
  console.log('formVal ===', this.chatbot_name);
  this.router.navigate(['']);
}

ngAfterViewChecked() {        
  this.scrollToBottom();        
} 

scrollToBottom(): void {
  try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
  } catch(err) { }                 
}

sendMessage() {

  if (this.formValue.replace(/\s/g, "") != "") {
    var cht = {MsgChatIn: this.formValue}

    this.chat.sendMessage(cht).subscribe(res => console.log('entered value ==', res))
    
    this.chat.converse(cht, false, "null");
    this.formValue = "";
  }
  this.formValue = "";
}



}
