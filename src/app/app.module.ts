import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { InitialsAvatarComponent } from './initials-avatar/initials-avatar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, InitialsAvatarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
