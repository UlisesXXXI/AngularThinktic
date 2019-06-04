import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicionales',
  templateUrl: './condicionales.component.html',
  styleUrls: ['./condicionales.component.css']
})
export class CondicionalesComponent implements OnInit {
  etiqueta:string="Etiqueta condicional";
  condicion:boolean=true;
  constructor() { }

  ngOnInit() {
  }

  CambiarCondicion(){
    this.condicion = !this.condicion;
  }

}
