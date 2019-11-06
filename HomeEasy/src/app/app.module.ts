import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TelaDeCadastroComponent } from './tela-de-cadastro/tela-de-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaDeCadastroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
