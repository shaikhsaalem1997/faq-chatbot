import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ChatService } from './chat.service';
import { VoicerecognitionService } from './voicerecognition.service';
import { ConfigComponent } from './config/config.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ChatService, VoicerecognitionService, ConfigComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
