import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatEngComponent } from './chat-eng/chat-eng.component';
import { ChatArbComponent } from './chat-arb/chat-arb.component';
import { SpeechToTextComponent } from './speech-to-text/speech-to-text.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ChatService } from './chat.service';
import { VoicerecognitionService } from './voicerecognition.service';


@NgModule({
  declarations: [
    AppComponent,
    ChatEngComponent,
    ChatArbComponent,
    SpeechToTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ChatService, VoicerecognitionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
