
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { HeroesComponent } from './heroes/heroes.component';
import { PersonasComponent } from './personas/personas.component';
import { UsaServicioComponent } from './usa-servicio/usa-servicio.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    HeroesComponent,
    PersonasComponent,
    UsaServicioComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
