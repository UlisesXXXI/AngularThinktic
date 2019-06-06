import { Component, OnInit } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-usa-servicio',
  templateUrl: './usa-servicio.component.html',
  styleUrls: ['./usa-servicio.component.css']
})
export class UsaServicioComponent implements OnInit {

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

}
