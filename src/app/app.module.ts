import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotoComponent } from './toto/toto.component';
import { PassagerComponent } from './passager/passager.component';

@NgModule({
  declarations: [
    AppComponent,
    TotoComponent,
    PassagerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
