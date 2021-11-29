import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonupComponent } from './buttonup/buttonup.component';
import { ButtondownComponent } from './buttondown/buttondown.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonupComponent,
    ButtondownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
