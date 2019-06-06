import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResultadosComponent } from './resultados/resultados.component';
import {HttpClientModule} from '@angular/common/http'
import { ResultadosServiceService } from './services/resultados-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ResultadosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
